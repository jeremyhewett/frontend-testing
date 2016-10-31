'use strict';

class RaisedButton {

  get element() {
    return browser.element('#test-raised-button');
  }

  get wasClicked() {
    return browser.execute(`return window.raisedButton.clicked`).value;
  }

  set wasClicked(value) {
    browser.execute(`window.raisedButton.clicked = ${value}`);
  }

  get backgroundColor() {
    return this.element.getCssProperty('background-color').value;
  }

  set isPrimary(value) {
    browser.execute(`window.raisedButton.primary = ${value}`);
    browser.execute(`window.raisedButton.refresh()`);
    browser.pause(500);
  }

}

module.exports = new RaisedButton();