'use strict';

class SidePanel {

  get element() {
    return browser.element('.acl-panel');
  }

  open() {
    browser.execute('window.sidePanel.open()');
    browser.pause(500);
  }

  get onOpenFired() {
    return browser.execute('return window.sidePanel.onOpenFired').value;
  }

  close() {
    browser.element('.acl-panel button.panel__close').click();
    browser.pause(500);
  }

  get onCloseFired() {
    return browser.execute('return window.sidePanel.onCloseFired').value;
  }

  get title() {
    return browser.element('.acl-panel .panel__title').getText();
  }

  get content() {
    return browser.element('.acl-panel .panel__content');
  }

}

module.exports = new SidePanel();