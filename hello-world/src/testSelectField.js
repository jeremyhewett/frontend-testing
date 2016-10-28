import React, { Component } from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class TestSelectField extends Component {

  constructor(props, context) {
    super(props, context);

    window.selectField = {
      options: [
        { label: '', value: null },
        { label: 'No', value: false },
        { label: 'Yes', value: true }
      ],
      refresh: () => this.forceUpdate()
    };
  }

  handleChange = (event, index, value) => window.selectField.value = value;

  render() {
    return (
      <SelectField floatingLabelText="Ready?" value={window.selectField.value} onChange={this.handleChange}>
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
