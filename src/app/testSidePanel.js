import React, { Component } from 'react';

import SidePanel from '../components/SidePanel';

class TestSidePanel extends Component {

  constructor(props, context) {
    super(props, context);

    window.sidePanel = {
      open: () => this.refs.panel.open(),
      close: () => this.refs.panel.close(),
      refresh: () => this.forceUpdate()
    };

  }

  render() {
    return (
      <SidePanel
        ref="panel"
        title="ACL UI is Awesome"
        onOpen={() => window.sidePanel.onOpenFired = true}
        onClose={() => window.sidePanel.onCloseFired = true}
        id="test-side-panel">
        <h1>Side Panel Content</h1>
      </SidePanel>
    );
  }
}

export default TestSidePanel;
