import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class TestSelectField extends Component {

  constructor(props, context) {
    super(props, context);

    window.selectField = {
      options: [
        { label: '', value: null },
        { label: 'Yes', value: true },
        { label: 'No', value: false }
      ],
      value: null,
      refresh: () => this.forceUpdate()
    };
  }

  handleChange = (event, index, value) => {
    window.selectField.value = value;
    this.forceUpdate();
  };

  render() {
    return (
      <MuiThemeProvider>
        <SelectField value={window.selectField.value} onChange={this.handleChange} id="test-select-field">
          {
            window.selectField.options.map(function(option, i) {
              return <MenuItem value={option.value} primaryText={option.label} key={i}/>;
            })
          }
        </SelectField>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<TestSelectField/>, document.getElementById('root'));
