import React, { Component } from 'react';
import Accordion from 'react-foundation-apps/lib/accordion';

class SampleAccordion extends Component {
  render() {
    return (
      <Accordion>
        <Accordion.Item title='First item title'>
           First item content
        </Accordion.Item>
        <Accordion.Item title='Second item title'>
          Second item content
        </Accordion.Item>
        <Accordion.Item title='Third item title'>
          Third item content
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default SampleAccordion;
