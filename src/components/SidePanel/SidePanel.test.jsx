/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0*/
import React from 'react';
import SidePanel from './SidePanel';
import renderer from 'react-test-renderer';

describe('<SidePanel />', () => {
  it('Should render a basic <SidePanel />', () => {
    const component = renderer.create(<SidePanel />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should display the default warning labels', () => {
    const component = renderer.create(<SidePanel title="" titleIcon="" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should render the title with an icon', () => {
    const component = renderer.create(<SidePanel title="" titleIcon="acl-i-lab-logo-circle" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should render children inside of the SidePanel', () => {
    const component = renderer.create(<SidePanel><p>test content for children</p></SidePanel>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should render the children warning text when no passing value', () => {
    const component = renderer.create(<SidePanel childrens="" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should render slideDirection=right', () => {
    const component = renderer.create(<SidePanel slideDirection="right" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should render slideDirection=left', () => {
    const component = renderer.create(<SidePanel slideDirection="left" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('<SidePanel width />', () => {
    it("Should set width='small'", () => {
      const component = renderer.create(<SidePanel width="small" />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it("Should set width='oneThird'", () => {
      const component = renderer.create(<SidePanel width="oneThird" />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it("Should set width='half'", () => {
      const component = renderer.create(<SidePanel width="half" />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it("Should set width='threeQuarters'", () => {
      const component = renderer.create(<SidePanel width="threeQuarters" />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it("Should set width='maximum'", () => {
      const component = renderer.create(<SidePanel width="maximum" />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
