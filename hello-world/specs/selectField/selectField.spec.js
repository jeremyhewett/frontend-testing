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

  it('should not display a value', function() {
    expect(selectField.displayedValue).toEqual('');
  });

  describe('and a value is selected', () => {

    beforeAll(() => {
      selectField.storedValue = 'null';
    });

    it('update the value', function() {
      selectField.selectItem(1);
      expect(selectField.displayedValue).toEqual('Yes');
      expect(selectField.storedValue).toEqual(true);
    });

  });

});