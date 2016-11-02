import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AclButton from '../components/AclButton';

class TestAclButton extends Component {

  constructor(props, context) {
    super(props, context);

    window.aclButton = {
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

ReactDOM.render(<TestAclButton/>, document.getElementById('root'));
