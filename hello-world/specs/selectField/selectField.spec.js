'use strict';

let App = require('../app.pageObject');
let selectField = require('./selectField.pageObject');

describe('selectField', function() {

  beforeAll(() => {
    App.load();
  });

  it('should be visible', function() {
    expect(selectField.element.isVisible()).toEqual(true);
  });

});