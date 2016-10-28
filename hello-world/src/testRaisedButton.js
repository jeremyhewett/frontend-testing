import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class TestRaisedButton extends Component {

  constructor(props, context) {
    super(props, context);

    window.raisedButton = {
      label: 'Test Me!!',
      refresh: () => this.forceUpdate()
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick = () => window.raisedButton.clicked = true;

  render() {
    return (
      <RaisedButton label={window.raisedButton.label} secondary={true} onClick={this.onClick} />
    );
  }
}

export default TestRaisedButton;
