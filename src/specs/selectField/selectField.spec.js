(function() {
  'use strict';

  let App = require('./app.pageObject');
  let selectField = require('./selectField/selectField.pageObject');

  describe('selectField', function () {

    beforeAll(() => {
      App.load();
    });

    it('should be visible', function () {
      expect(selectField.element.isVisible()).toEqual(true);
    });

    it('should not display a value initially', function () {
      expect(selectField.displayedValue).toEqual('');
    });

    it('should update the displayed value and call the onChange handler when a value is selected', function () {
      selectField.storedValue = 'null';
      selectField.selectItem(1);
      expect(selectField.displayedValue).toEqual('Yes');
      expect(selectField.storedValue).toEqual(true);
    });

  });

}());