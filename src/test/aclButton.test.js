import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AclButton from '../components/button/button';

describe("Acl Button", function() {

  it("should display given title", function() {
    expect(shallow(<AclButton title='Enzyme' />).text()).toEqual('Enzyme');
  });

});