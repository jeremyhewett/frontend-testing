'use strict';

let App = require('../app.pageObject');
let raisedButton = require('./raisedButton.pageObject');

describe('raisedButton', function() {

  beforeAll(() => {
    App.load();
  });

  it('should be visible', function() {
    expect(raisedButton.element.isVisible()).toEqual(true);
  });

  it('should be the right color', function() {
    expect(raisedButton.backgroundColor).toEqual('rgba(255,255,255,1)');
  });

  describe('when is primary', () => {

    beforeAll(() => {
      raisedButton.isPrimary = true;
    });

    it('should be the right color', function() {
      expect(raisedButton.backgroundColor).toEqual('rgba(0,188,212,1)');
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