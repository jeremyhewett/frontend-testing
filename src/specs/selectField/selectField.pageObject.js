'use strict';

let constants = require('../constants');

class SelectField {

  load(){
    browser.url('/?selectedKind=SelectField&selectedStory=Test%20SelectField');
    browser.frame(constants.iframe);
  }

  get element() {
    return browser.element('#test-select-field');
  }

  get storedValue() {
    return browser.execute('return window.selectField.value').value;
  }

  set storedValue(value) {
    return browser.execute(`window.selectField.value = ${value}`);
  }

  get displayedValue() {
    return this.element.getText();
  }

  selectItem(index) {
    this.element.click();
    browser.pause(100);
    browser.element(`//BODY/DIV[3]/DIV/DIV/DIV/DIV[${index + 1}]/SPAN`).click();
  }

}

module.exports = new SelectField();