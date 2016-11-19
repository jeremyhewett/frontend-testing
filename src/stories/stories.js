import React, { Component } from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AclButton from '../components/AclButton';

class Wrapper extends Component {

  constructor(props, context) {
    super(props, context);

    window.aclButton = {
      title: 'ACL Button',
      refresh: () => this.forceUpdate()
    };
  }

  render() {
    return (
      <AclButton
        title={window.aclButton.title}
        onClick={() => window.aclButton.wasClicked = true}
        type={window.aclButton.type}
        tiny={window.aclButton.tiny}
        disabled={window.aclButton.disabled}
        id="test-acl-button"/>
    );
  }
}

storiesOf('AclButton', module).add('Test AclButton', () => (<Wrapper></Wrapper>));
