'use strict';

let parseColor = require('parse-color');

module.exports = {

  toEqualColor: (util, customEqualityTesters) => {
    return {
      compare: function(actual, expected) {
        let actualColor = parseColor(actual);
        let expectedColor = parseColor(expected);
        let result = {
          pass: util.equals(actualColor.rgba, expectedColor.rgba, customEqualityTesters)
        };
        if (!result.pass) {
          result.message = `Expected ${actual} ( ${actualColor} ) + to equal ${expected} ( ${expectedColor} )`;
        }
        return result;
      }
    };
  }

};