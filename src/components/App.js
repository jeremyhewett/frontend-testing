import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TestRaisedButton from './testRaisedButton';
import TestSelectField from './testSelectField';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 id="heading">React Components</h2>
          </div>
          <div>
            <h4>Raised Button</h4>
            <TestRaisedButton/>
          </div>
          <div>
            <h4>Select Field</h4>
            <TestSelectField/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
