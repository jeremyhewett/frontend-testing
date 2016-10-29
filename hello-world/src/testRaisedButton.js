import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class TestRaisedButton extends Component {

  constructor(props, context) {
    super(props, context);

    window.raisedButton = {
      label: 'Test Me!!',
      primary: false,
      refresh: () => this.forceUpdate()
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick = () => window.raisedButton.clicked = true;

  render() {
    return (
      <RaisedButton label={window.raisedButton.label} primary={window.raisedButton.primary} onClick={this.onClick} id="test-raised-button"/>
    );
  }
}

export default TestRaisedButton;
