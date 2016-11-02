import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AclButton from '../components/AclButton';

describe("Acl Button", function() {

  it('should be visible', () => {
    //Can't test
  });

  it("should display given title", function() {
    expect(shallow(<AclButton title='Enzyme' />).text()).toEqual('Enzyme');
  });

  it('should have grey background when no type', () => {
    //Can't test
  });

  it('should have green background when primary', () => {
    expect(shallow(<AclButton type='primary' />).hasClass('primary')).toEqual(true);
  });

  it('should have purple background when secondary', () => {
    expect(shallow(<AclButton type='secondary' />).hasClass('secondary')).toEqual(true);
  });

  it('should call onClick handler when clicked', function () {
    var onClick = sinon.spy();
    let wrapper = mount(<AclButton onClick={onClick}></AclButton>);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });

  it('should not call onClick handler when disabled', function () {
    var onClick = sinon.spy();
    let wrapper = mount(<AclButton onClick={onClick} disabled={true}></AclButton>);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).toEqual(false);
  });

});