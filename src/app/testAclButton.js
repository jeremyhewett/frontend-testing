import React, { Component } from 'react';

import AclButton from '../components/button/button';

class TestAclButton extends Component {

  constructor(props, context) {
    super(props, context);

    window.aclButton = {
      title: 'Test Me!!',
      wasClicked: false,
      type: undefined,
      isTiny: false,
      refresh: () => this.forceUpdate()
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick = () => window.aclButton.wasClicked = true;

  render() {
    return (
      <AclButton
        title={window.aclButton.title}
        onClick={this.onClick}
        type={window.aclButton.type}
        tiny={window.aclButton.isTiny}
        id="test-acl-button"/>
    );
  }
}

export default TestAclButton;
