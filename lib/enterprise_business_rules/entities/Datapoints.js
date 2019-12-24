'use strict';

module.exports = class {
  /**
     * Create a Datapoints object.
     * @param {number} pointArrays - Array of objects representing datapoints
     for each topic requested.
     */
  constructor(pointArrays) {
    this.pointArrays = pointArrays;
  }

};
