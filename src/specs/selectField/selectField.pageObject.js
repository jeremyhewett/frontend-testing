'use strict';

class SelectField {

  load(){
    browser.url('/SelectField');
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
    browser.element(`//BODY/DIV[2]/DIV/DIV/DIV/DIV[${index + 1}]/SPAN`).click();
  }

}

module.exports = new SelectField();