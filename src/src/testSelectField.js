import React, { Component } from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
    this.setState({value});
  };

  render() {
    return (
      <SelectField value={window.selectField.value} onChange={this.handleChange} id="test-select-field">
        {
          window.selectField.options.map(function(option, i) {
            return <MenuItem value={option.value} primaryText={option.label} key={i}/>;
          })
        }
      </SelectField>
    );
  }
}

export default TestSelectField;
