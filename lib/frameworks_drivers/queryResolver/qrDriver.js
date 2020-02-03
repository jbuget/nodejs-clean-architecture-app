'use strict';
const Boom = require('@hapi/boom');

const {API_GATEWAY_ENDPOINT} = process.env;
const fetch = require('node-fetch');

function formatESQueryRequest(phrase, period, category) {
  const start = Math.trunc(period.start);
  const end = Math.trunc(period.end);
  const interval = Math.trunc(period.interval)*1000; //Input is milliseconds

  // ES 2.3 Query and Aggregations
  // https://www.elastic.co/guide/en/elasticsearch/reference/2.3/query-filter-context.html
  // https://www.elastic.co/guide/en/elasticsearch/reference/2.3/search-aggregations-bucket-datehistogram-aggregation.html

  const queryBody = {
    _source: false,
    size: 0,
    query: {
      bool: {
        must: {
          match_phrase: {
            "fields.abstract": phrase
          }
        },
        filter: {
          range: {
            "fields.published_date": {
              gte: start,
              lte: end
            }
          }
        }
      }
    },

    aggs: {
      articles_over_time: {
        histogram: {
          field: "fields.published_date",
          interval: interval
        }
      }
    }
  };

  return queryBody;
}

function formatESQueryRequests(req) {
  return req.phrases.map(phrase =>
      formatESQueryRequest(phrase, req.period, req.category)
    );
}

function formatAggData(data) {
  return data.aggregations.articles_over_time.buckets.map(bucket => ({
    t: parseInt(bucket.key_as_string),
    y: bucket.doc_count
  }));
}

function formatESQueryResponses(res, phrases) {
  const resFiltered = res
    .map((obj, i) => ({
      phrase: phrases[i],
      data: obj
    }))
    .map(markedObj => ({
      phrase: markedObj.phrase,
      data: formatAggData(markedObj.data)
    }));
  return resFiltered;
}


module.exports = {
  async resolve(query){
    //Make HTTP request to QueryResolver microservice
    const request = formatESQueryRequests(query);
    let response;
    console.log(API_GATEWAY_ENDPOINT);
    try {
      const data = await fetch(API_GATEWAY_ENDPOINT, {
        method: 'post',
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const parsedData = await data.json();
      response = formatESQueryResponses(parsedData, query.phrases);
    } catch(e) {
      console.error(e);
      response = Boom.notImplemented('Query Not Resolved');
    }
    console.log(response);
    return response;
  }
}
