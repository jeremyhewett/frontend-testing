'use strict';

let App = require('../app.pageObject');
let customMatchers = require('../customMatchers');
let constants = require('../constants');

let aclButton = require('./aclButton.pageObject');

describe('aclButton', function() {

  beforeAll(() => {
    App.load();
  });

  beforeEach(() => {
    jasmine.addMatchers(customMatchers);
  });

  it('should be visible', function() {
    expect(aclButton.element.isVisible()).toEqual(true);
  });

  it('should have grey background', function() {
    expect(aclButton.backgroundColor).toEqualColor(constants.aclGrey);
  });

  it('should have title "Acl Button"', function() {
    expect(aclButton.title).toEqual('Test Me!!');
  });

  describe('when title is changed', () => {

    beforeAll(() => {
      aclButton.title = 'Acl Button';
    });

    it('should display new title', () => {
      expect(aclButton.title).toEqual('Acl Button');
    });

  });

  describe('when is primary', () => {

    beforeAll(() => {
      aclButton.type = 'primary';
    });

    it('should have green background', function() {
      expect(aclButton.backgroundColor).toEqualColor(constants.aclGreen);
    });

  });

  describe('when is secondary', () => {

    beforeAll(() => {
      aclButton.type = 'secondary';
    });

    it('should have purple background', function() {
      expect(aclButton.backgroundColor).toEqualColor(constants.aclPurple);
    });

  });

  describe('when clicked', () => {

    beforeAll(() => {
      aclButton.wasClicked = false;
      aclButton.element.click();
    });

    it('should call onClick handler', function() {
      expect(aclButton.wasClicked).toEqual(true);
    });

  });

});