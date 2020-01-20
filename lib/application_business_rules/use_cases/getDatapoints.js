'use strict';

const Datapoints = require('../../enterprise_business_rules/models/Datapoints');
const moment = require('moment');
const EPOCH_STARTS = {
  'Past 3 Months': () => moment().subtract(3, 'months').valueOf(),
  'Past Year': () => moment().subtract(1, 'years').valueOf(),
  'Past 5 Years': () => moment().subtract(5, 'years').valueOf(),
  'Past 10 Years': () => moment().subtract(10, 'years').valueOf(),
  '1991 - present':() => moment(682128000000).valueOf(),
}

const CATEGORY_CODES = {
  'Astrophysics': 'astro-ph',
  'Condensed Matter': 'cond-mat',
  'Physics': 'physics',
  'Mathematics': 'math',
  'Nonlinear Sciences': 'nlin',
  'Computer Science': 'cs',
  'Quantitative Biology': 'q-bio',
  'Quantitative Finance': 'q-fin',
  'Statistics': 'stat',
  'Electrical Engineering': 'eess',
  'Economics': 'econ',
}


function getRangeStartFromString(rangeString) {
  return EPOCH_STARTS[rangeString]()
}

function getCategoryCodeFromString(category) {
  return CATEGORY_CODES[category]
}

function transformQuery(query) {
  var queryRes = {};
  queryRes.phrase = query.phrase;
  queryRes.start = getRangeStartFromString(query.range);
  queryRes.end = moment().valueOf();
  queryRes.category = getCategoryCodeFromString(query.category);
  return queryRes
}

module.exports = (query, {
  datapointsRepository
}) => {
  return datapointsRepository.resolveQuery(transformQuery(query));
};
