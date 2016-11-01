(function() {
  'use strict';

  let App = require('./app.pageObject');
  let customMatchers = require('./customMatchers');
  let constants = require('./constants');

  let aclButton = require('./aclButton/aclButton.pageObject');

  describe('aclButton', function () {

    beforeAll(() => {
      jasmine.addMatchers(customMatchers);
      App.load();
    });

    it('should be visible', function () {
      expect(aclButton.element.isVisible()).toEqual(true);
    });

    it('should display given title', function () {
      aclButton.title = 'Acl Button';
      expect(aclButton.title).toEqual('Acl Button');
    });

    it('should have grey background when no type', function () {
      aclButton.type = '';
      expect(aclButton.backgroundColor).toEqualColor(constants.aclGrey);
    });

    it('should have green background when primary', function () {
      aclButton.type = 'primary';
      expect(aclButton.backgroundColor).toEqualColor(constants.aclGreen);
    });

    it('should have purple background when secondary', function () {
      aclButton.type = 'secondary';
      expect(aclButton.backgroundColor).toEqualColor(constants.aclPurple);
    });

    it('should call onClick handler when clicked', function () {
      aclButton.wasClicked = false;
      aclButton.element.click();
      expect(aclButton.wasClicked).toEqual(true);
    });

  });

}());