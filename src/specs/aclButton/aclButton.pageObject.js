'use strict';

let constants = require('../constants');

class AclButton {

  load() {
    browser.url('/?selectedKind=AclButton&selectedStory=Test%20AclButton');
    browser.frame(constants.iframe);
  }

  get element() {
    return browser.element('#test-acl-button');
  }

  get title() {
    return this.element.getText();
  }

  set title(value) {
    browser.execute(`window.aclButton.title = '${value}'`);
    browser.execute(`window.aclButton.refresh()`);
  }

  set disabled(value) {
    browser.execute(`window.aclButton.disabled = ${value}`);
    browser.execute(`window.aclButton.refresh()`);
  }

  get wasClicked() {
    return browser.execute(`return window.aclButton.wasClicked`).value;
  }

  set wasClicked(value) {
    browser.execute(`window.aclButton.wasClicked = ${value}`);
  }

  get backgroundColor() {
    return this.element.getCssProperty('background-color');
  }

  set type(type) {
    browser.execute(`window.aclButton.type = '${type}'`);
    browser.execute(`window.aclButton.refresh()`);
    browser.pause(500);
  }

}

module.exports = new AclButton();