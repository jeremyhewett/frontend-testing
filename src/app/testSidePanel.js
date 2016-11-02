import React, { Component } from 'react';

import SidePanel from '../components/SidePanel';

class TestSidePanel extends Component {

  constructor(props, context) {
    super(props, context);

    window.sidePanel = {
      refresh: () => this.forceUpdate()
    };

  }

  openPanel() {
    this.refs.panel.open();
  }

  render() {
    return (
      <div>
        <button onClick={this.openPanel.bind(this)}>Open SidePanel</button>
        <SidePanel ref="panel" title="ACL UI is Awesome">
          <h1>Objectives:</h1>
          <ul>
            <li>Happy customers</li>
            <li>Profit</li>
          </ul>
        </SidePanel>
      </div>
    );
  }
}

export default TestSidePanel;
