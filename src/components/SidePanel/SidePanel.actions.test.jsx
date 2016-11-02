import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import SidePanel from './SidePanel';

const createComponent = (props) => {
  const component = React.createElement(SidePanel, props || {});
  const instance = TestUtils.renderIntoDocument(component);
  return { instance, component };
};

const existClassName = (instance, className) => {
  const elementArray = TestUtils.scryRenderedDOMComponentsWithClass(instance, className);
  return elementArray.length > 0 ? elementArray[0].classList.contains(className) : false;
};

describe("<SidePanel clickableOverlay=''>", () => {
  it('Should close the sidePanel on clicking overlay', () => {
    const { instance } = createComponent();
    instance.open();
    expect(existClassName(instance, 'is-open')).toBe(true);
    const overlay = TestUtils.findRenderedDOMComponentWithClass(
      instance,
      'acl-panel-overlay'
    );
    TestUtils.Simulate.click(overlay);
    expect(existClassName(instance, 'is-open')).toBe(false);
  });

  it("Shouldn't close the sidePanel on clicking the overlay", () => {
    const { instance } = createComponent({ clickableOverlay: false });
    instance.open();
    expect(existClassName(instance, 'is-open')).toBe(true);
    const overlay = TestUtils.findRenderedDOMComponentWithClass(instance, 'acl-panel-overlay');
    TestUtils.Simulate.click(overlay);
    expect(existClassName(instance, 'is-close')).toBe(false);
    expect(existClassName(instance, 'is-open')).toBe(true);
  });
});

describe("<SidePanel hasOverlay=''>", () => {
  it('Should display overlay (default)', () => {
    const { instance } = createComponent();
    instance.open();
    expect(existClassName(instance, 'acl-panel-overlay')).toBe(true);
  });

  it('Should NOT display overlay', () => {
    const { instance } = createComponent({ hasOverlay: false });
    instance.open();
    expect(existClassName(instance, 'acl-panel-overlay')).toBe(false);
  });

  it('Should display overlay', () => {
    const { instance } = createComponent({ hasOverlay: true });
    instance.open();
    expect(existClassName(instance, 'acl-panel-overlay')).toBe(true);
  });
});

describe("<SidePanel hasCloseButton=''>", () => {
  it('Should display close button (default)', () => {
    const { instance } = createComponent();
    instance.open();
    expect(existClassName(instance, 'panel__close')).toBe(true);
  });

  it('Should NOT display close button', () => {
    const { instance } = createComponent({ hasCloseButton: false });
    instance.open();
    expect(existClassName(instance, 'panel__close')).toBe(false);
  });

  it('Should display close button', () => {
    const { instance } = createComponent({ hasCloseButton: true });
    instance.open();
    expect(existClassName(instance, 'panel__close')).toBe(true);
  });
});

describe("<SidePanel closeOnEscKeyDown=''>", () => {
  // TODO try to implement document events https://github.com/airbnb/enzyme/issues/426 for testing
  it('Should called onEscapeKey and trigger onClose', () => {
    const { instance } = createComponent();
    const spyOnEscapeKey = sinon.spy(instance, 'onEscapeKey');
    const spyOnClose = sinon.spy(instance, 'onClose');
    instance.onEscapeKey({ keyCode: 27 });
    expect(spyOnEscapeKey.called).toBe(true);
    expect(spyOnClose.called).toBe(true);
  });

  it('Should called onEscapeKey and NOT call onClose', () => {
    const { instance } = createComponent({ closeOnEscKeyDown: false });
    const spyOnEscapeKey = sinon.spy(instance, 'onEscapeKey');
    const spyOnClose = sinon.spy(instance, 'onClose');
    instance.onEscapeKey();
    expect(spyOnEscapeKey.called).toBe(true);
    expect(spyOnClose.called).toBe(false);
  });
});

describe("<SidePanel onOpen='' onClose=''>", () => {
  const spyConsole = sinon.spy();
  it('Should called onOpen callBack', () => {
    const { instance } = createComponent({ onOpen: spyConsole });
    instance.open();
    expect(spyConsole.callCount).toBe(1);
  });

  it('Should called onClose callBack', () => {
    const { instance } = createComponent({ onClose: spyConsole });
    instance.open();
    instance.close();
    expect(spyConsole.callCount).toBe(2);
  });
});
