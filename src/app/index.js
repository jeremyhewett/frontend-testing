import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';

import './App.scss';
import 'acl-ui/core/all.scss';
import 'acl-icon-font/dist/css/main.scss';

class Index extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header" style={{marginBottom: '100px'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2 id="heading">Component Testing</h2>
        </div>
        <div className="App-body">
          <ul>
            <li><a href="/AclButton">ACL Button</a></li>
            <li><a href="/SelectField">Select Field</a></li>
            <li><a href="/SidePanel">Side Panel</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
