'use strict';

module.exports = class {
  /**
     * Create a Datapoints object.
     * @param {number} pointArray - Array of objects representing datapoints
     for each topic requested.
     */
  constructor(pointArray) {
    this.pointArray = pointArray;
  }

};
