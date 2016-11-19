import React, { Component } from 'react';
import { storiesOf, action } from '@kadira/storybook';

import 'acl-ui/core/all.scss';
import 'acl-icon-font/dist/css/main.scss';
import SidePanel from '../components/SidePanel';

class Wrapper extends Component {

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

storiesOf('SidePanel', module).add('Test SidePanel', () => (<Wrapper></Wrapper>));
