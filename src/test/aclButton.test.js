import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AclButton from '../components/button/button';

describe("Acl Button", function() {

  it("should display given title", function() {
    expect(mount(<AclButton title='Enzyme' />).text()).toEqual('Enzyme');
  });

  it('should call onClick handler when clicked', function () {
    var onClick = sinon.spy();
    let btn = mount(<AclButton onClick={onClick}></AclButton>);
    btn.find('button').simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });

});