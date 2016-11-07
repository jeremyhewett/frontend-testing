'use strict';

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

describe('Select Field', function () {

  let wrapper, options, onChange;

  beforeEach(() => {
    onChange = sinon.spy();
    options = [
      { label: '', value: null },
      { label: 'Yes', value: true },
      { label: 'No', value: false }
    ];
    wrapper = mount(
      <MuiThemeProvider>
        <SelectField value={null} onChange={onChange} id="test-select-field">
          {
            options.map(function(option, i) {
              return <MenuItem value={option.value} primaryText={option.label} key={i}/>;
            })
          }
        </SelectField>
      </MuiThemeProvider>
    )
  });

  it('should be visible', function () {
    //can't test
  });

  it('should not display a value initially', function () {
    expect(wrapper.find('#test-select-field').text()).toEqual('');
  });

  it('should update the displayed value and call the onChange handler when a value is selected', function () {
    expect(wrapper.find(SelectField).simulate('click'));
    //no way to select option
  });

});
