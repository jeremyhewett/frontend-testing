import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SidePanel from '../components/SidePanel';

describe("Side Panel", function() {

  it('should not be visible initially', () => {
    let wrapper = mount(<SidePanel></SidePanel>);
    expect(wrapper.find('.acl-panel').hasClass('is-open')).toEqual(false);
  });

  it('should become visible and call onOpen when opened', () => {
    var onOpen = sinon.spy();
    let wrapper = mount(<SidePanel onOpen={onOpen}></SidePanel>);
    wrapper.instance().open();
    expect(wrapper.find('.acl-panel').hasClass('is-open')).toEqual(true);
    expect(onOpen.calledOnce).toEqual(true);
  });

  it('should display given title', () => {
    let wrapper = mount(<SidePanel title="123"></SidePanel>);
    expect(wrapper.find('.acl-panel').text()).toEqual('123');
  });

  it('should display transcluded content', () => {
    let wrapper = mount(<SidePanel><div id="my-panel-content">Content</div></SidePanel>);
    expect(wrapper.find('#my-panel-content').text()).toEqual('Content');
  });

  it('should become invisible and call onClose when closed', () => {
    var onClose = sinon.spy();
    let wrapper = mount(<SidePanel onClose={onClose}></SidePanel>);
    wrapper.instance().open();
    wrapper.find('button.panel__close').simulate('click');
    expect(wrapper.find('.acl-panel').hasClass('is-open')).toEqual(false);
    expect(onClose.calledOnce).toEqual(true);
  });

});