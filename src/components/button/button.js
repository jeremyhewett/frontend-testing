import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    onClick: React.PropTypes.func,
    type: React.PropTypes.string,
    tiny: React.PropTypes.bool,
    id: React.PropTypes.string
  };

  handleClick(e) {
    if (this.props.onClick) {
      e.preventDefault();
      this.props.onClick(e)
    }
  }
  
  render() {
    var className = 'acl_button';
    if (this.props.type) {
      className += ' ' + this.props.type
    }
    return (
      <button className={className} onClick={this.handleClick.bind(this)} id={this.props.id}>{this.props.title}</button>
    );
  }
  
}
