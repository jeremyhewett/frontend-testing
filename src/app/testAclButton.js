import React, { Component } from 'react';

import AclButton from '../components/button/button';

class TestAclButton extends Component {

  constructor(props, context) {
    super(props, context);

    window.aclButton = {
      title: 'Test Me!',
      refresh: () => this.forceUpdate()
    };
  }

  render() {
    return (
      <AclButton
        title={window.aclButton.title}
        onClick={() => window.aclButton.wasClicked = true}
        type={window.aclButton.type}
        tiny={window.aclButton.isTiny}
        id="test-acl-button"/>
    );
  }
}

export default TestAclButton;
