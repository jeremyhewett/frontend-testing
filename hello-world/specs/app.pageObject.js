'use strict';

class App {

  load(){
    browser.url('/');
  }

  get heading() {
    return browser.element('#heading').getText();
  }

}

module.exports = new App();