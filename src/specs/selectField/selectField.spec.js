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

    it('should not display a value', function () {
      expect(selectField.displayedValue).toEqual('');
    });

    describe('when a value is selected', () => {

      beforeAll(() => {
        selectField.storedValue = 'null';
        selectField.selectItem(1);
      });

      it('should update the displayed value', function () {
        expect(selectField.displayedValue).toEqual('Yes');
      });

      it('should call onChange with the new value', function () {
        expect(selectField.storedValue).toEqual(true);
      });

    });

  });

}());