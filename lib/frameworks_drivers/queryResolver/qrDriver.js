'use strict';
const Boom = require('@hapi/boom');

const {API_GATEWAY_ENDPOINT} = process.env;
const fetch = require('node-fetch');
module.exports = {
  async resolve(query) {
    //Make HTTP request to QueryResolver microservice
    let response;
    console.log(API_GATEWAY_ENDPOINT);
    await fetch(API_GATEWAY_ENDPOINT, {
        method: 'post',
        body: JSON.stringify(query),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(data => data.json())
      .then(data => {
        response = data;
      })
      .catch(error => {
        response = Boom.notImplemented('Query Not Resolved');;
      });
    console.log(response);
    return response
  }
};
