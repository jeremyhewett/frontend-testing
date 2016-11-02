import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'acl-ui/core/all.scss';
import 'acl-icon-font/dist/css/main.scss';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TestAclButton from './testAclButton';
import TestSelectField from './testSelectField';
import TestSidePanel from './testSidePanel';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header" style={{marginBottom: '100px'}}>
            <img src={logo} className="App-logo" alt="logo" />
            <h2 id="heading">React Components</h2>
          </div>
          <div className="App-body">
            <div>
              <h4>ACL Button</h4>
              <TestAclButton/>
            </div>
            <div style={{marginTop: '100px'}}>
              <h4>Select Field</h4>
              <TestSelectField/>
            </div>
            <div style={{marginTop: '100px'}}>
              <h4>Side Panel</h4>
              <TestSidePanel/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
