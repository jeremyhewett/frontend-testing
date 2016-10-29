'use strict';

let App = require('../app.pageObject');
let customMatchers = require('../customMatchers');
let raisedButton = require('./raisedButton.pageObject');

describe('raisedButton', function() {

  beforeEach(() => {
    jasmine.addMatchers(customMatchers);
  });

  beforeAll(() => {
    App.load();
  });

  it('should be visible', function() {
    expect(raisedButton.element.isVisible()).toEqual(true);
  });

  it('should have white background', function() {
    expect(raisedButton.backgroundColor).toEqualColor('white');
  });

  describe('when is primary', () => {

    beforeAll(() => {
      raisedButton.isPrimary = true;
    });

    it('should have blue background', function() {
      expect(raisedButton.backgroundColor).toEqualColor('rgb(0,188,212)');
    });

  });

  describe('when clicked', () => {

    beforeAll(() => {
      raisedButton.wasClicked = false;
      raisedButton.element.click();
    });

    it('should call onClick handler', function() {
      expect(raisedButton.wasClicked).toEqual(true);
    });

  });

});