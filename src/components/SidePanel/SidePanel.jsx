import React, { Component, PropTypes } from 'react';

const warnings = {
  missingTitle: 'Use the title property on the aclSidePanel Element to render a title',
  missingContent: 'Write some children elements to render content in the aclSidePanel'
};

// config for the panel sizes
const widths = {
  default: 'acl-panel',
  small: '--size-small',
  oneThird: '--size-one-third',
  half: '--size-half',
  threeQuarters: '--size-three-quarters',
  maximum: '--size-max'
};

const slideDirection = {
  left: 'acl-panel--slide-left',
  right: 'acl-panel--slide-right'
};

const secondaryThemeClassName = 'acl-panel--secondary';

export default class SidePanel extends Component {

  static propTypes = {
    /**
     * The content for the Side Panel
     */
    children: PropTypes.node,
    /**
     * Text displaying as title at the top of the controller
     */
    title: PropTypes.string,
    /**
     * Allow to display an icon next to the title, accept any icon string from the UI-ACL
     * @string
     */
    titleIcon: React.PropTypes.string,
    /**
     * Modify the side for displaying the panel [left, right] Default is right
     * @string One of the keys in the Object slideDirection
     */
    slideDirection: React.PropTypes.oneOf(Object.keys(slideDirection).map(key => key)),
    /**
     * Modify the width of the panel
     * @string One of the keys in the Object Object panelWidths
     */
    width: React.PropTypes.oneOf(Object.keys(widths).map(key => key)),
    /**
     * Allow to set the secondary theme of ACL
     * @string true or false, this is a string format not a boolean
     */
    secondaryTheme: React.PropTypes.bool,
    /**
     * Disable the click event for the overlay, default is click event enable
     * @string true or false, this is a string format not a boolean
     */
    clickableOverlay: React.PropTypes.bool,
    /**
     * Disable the displaying of the overlay, default is enable
     * @string true or false, this is a string format not a boolean
     */
    hasOverlay: React.PropTypes.bool,
    /**
     * Hide the close button of the top right corner, 
     * default is showing the button hasCloseButton="false"
     */
    hasCloseButton: React.PropTypes.bool,
    /**
     * Disable the event of key up "esc" default is enable
     */
    closeOnEscKeyDown: React.PropTypes.bool,
    /**
     * Callback for onOpen event
     */
    onOpen: React.PropTypes.func,
    /**
     * Callback for onClose event
     */
    onClose: React.PropTypes.func
  };

  static defaultProps = {
    title: warnings.notTitle,
    children: warnings.notContent,
    width: 'default',
    slideDirection: 'right',
    clickableOverlay: true,
    hasOverlay: true,
    secondaryTheme: false,
    hasCloseButton: true,
    closeOnEscKeyDown: true
  };

  constructor() {
    super();
    this.aclContainer = null;
  }

  componentWillMount() {
    document.addEventListener('keyup', this.onEscapeKey.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onEscapeKey, false);
  }

  onOpen() {
    if (this.props.onOpen) {
      this.props.onOpen({ instance: this });
    }
  }

  onClose() {
    if (this.props.onClose) {
      this.props.onClose({ instance: this });
    }
  }

  onEscapeKey(e) {
    if (this.props.closeOnEscKeyDown) {
      // escape key maps to key-code `27`
      if (e.keyCode === 27 && this.props.clickableOverlay) {
        this.close();
        // if a callback is defined for on close
        if (this.props.onClose) {
          this.onClose();
        }
      }
    }
  }

  getPanelClassName() {
    const notDefaultDirection = () => (
      this.props.slideDirection !== SidePanel.defaultProps.slideDirection
    );

    const direction = notDefaultDirection() ? slideDirection.left : slideDirection.right;

    // assigning the width size of the container
    const notDefaultWidth = () => (this.props.width !== SidePanel.defaultProps.width);
    const width = notDefaultWidth() ?
      `${widths.default}${widths[this.props.width]}` : widths.default;

    // assigning the selected secondaryTheme
    const secondaryTheme = this.props.secondaryTheme ? secondaryThemeClassName : '';

    return `${widths.default} ${direction} ${width} ${secondaryTheme}`;
  }

  getTitleIcon() {
    if (this.props.titleIcon) {
      const iconClassName = `${this.props.titleIcon} panel-title__icon`;
      return <i className={iconClassName} />;
    }
    return '';
  }

  open() {
    const sidePanelContainer = this.aclContainer; // reference to the Dom Element
    sidePanelContainer.classList.add('is-open');
    this.onOpen();
  }

  close() {
    const sidePanelContainer = this.aclContainer; // reference to the Dom Element
    sidePanelContainer.classList.remove('is-open');
    this.onClose();
  }

  toggle(e) {
    const sidePanelContainer = this.aclContainer; // reference to the Dom Element
    const switchClasses = () => {
      sidePanelContainer.classList.toggle('is-open');
    };

    const triggerCallbacks = () => (
      sidePanelContainer.classList.contains('is-open') ? this.onOpen() : this.onClose()
    );

    if (!e || !e.target.classList.contains('acl-panel-overlay')) {
      switchClasses();
      triggerCallbacks();
      // if the overlay is not clickable we ignore the event / overlay is disabled.
    } else if (this.props.clickableOverlay) {
      switchClasses();
      triggerCallbacks();
    }
  }

  renderOverlay() {
    if (this.props.hasOverlay) {
      return <div className="acl-panel-overlay" onClick={e => this.toggle(e)} />;
    }

    return '';
  }

  renderCloseButton() {
    if (this.props.hasCloseButton) {
      return (<button className="panel__close" onClick={() => this.close()}>
        <i className="acl-i-times close__icon" />
      </button>);
    }

    return '';
  }

  render() {
    return (
      <div>
        <div ref={dom => (this.aclContainer = dom)} className={this.getPanelClassName()} >
          {this.renderCloseButton()}
          <div className="panel__body">
            <div className="panel__header">
              <h2 className="panel__title">
                { this.getTitleIcon() }
                { this.props.title }
              </h2>
            </div>
            <div className="panel__content">
              { this.props.children }
            </div>
          </div>
        </div>

        {this.renderOverlay()}
      </div>
    );
  }
}
