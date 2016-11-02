'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var warnings = {
  missingTitle: 'Use the title property on the aclSidePanel Element to render a title',
  missingContent: 'Write some children elements to render content in the aclSidePanel'
};

// config for the panel sizes
var widths = {
  default: 'acl-panel',
  small: '--size-small',
  oneThird: '--size-one-third',
  half: '--size-half',
  threeQuarters: '--size-three-quarters',
  maximum: '--size-max'
};

var slideDirection = {
  left: 'acl-panel--slide-left',
  right: 'acl-panel--slide-right'
};

var secondaryThemeClassName = 'acl-panel--secondary';

var SidePanel = function (_Component) {
  _inherits(SidePanel, _Component);

  function SidePanel() {
    _classCallCheck(this, SidePanel);

    var _this = _possibleConstructorReturn(this, (SidePanel.__proto__ || Object.getPrototypeOf(SidePanel)).call(this));

    _this.aclContainer = null;
    return _this;
  }

  _createClass(SidePanel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('keyup', this.onEscapeKey.bind(this), false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keyup', this.onEscapeKey, false);
    }
  }, {
    key: 'onOpen',
    value: function onOpen() {
      if (this.props.onOpen) {
        this.props.onOpen({ instance: this });
      }
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      if (this.props.onClose) {
        this.props.onClose({ instance: this });
      }
    }
  }, {
    key: 'onEscapeKey',
    value: function onEscapeKey(e) {
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
  }, {
    key: 'getPanelClassName',
    value: function getPanelClassName() {
      var _this2 = this;

      var notDefaultDirection = function notDefaultDirection() {
        return _this2.props.slideDirection !== SidePanel.defaultProps.slideDirection;
      };

      var direction = notDefaultDirection() ? slideDirection.left : slideDirection.right;

      // assigning the width size of the container
      var notDefaultWidth = function notDefaultWidth() {
        return _this2.props.width !== SidePanel.defaultProps.width;
      };
      var width = notDefaultWidth() ? '' + widths.default + widths[this.props.width] : widths.default;

      // assigning the selected secondaryTheme
      var secondaryTheme = this.props.secondaryTheme ? secondaryThemeClassName : '';

      return widths.default + ' ' + direction + ' ' + width + ' ' + secondaryTheme;
    }
  }, {
    key: 'getTitleIcon',
    value: function getTitleIcon() {
      if (this.props.titleIcon) {
        var iconClassName = this.props.titleIcon + ' panel-title__icon';
        return _react2.default.createElement('i', { className: iconClassName });
      }
      return '';
    }
  }, {
    key: 'open',
    value: function open() {
      var sidePanelContainer = this.aclContainer; // reference to the Dom Element
      sidePanelContainer.classList.add('is-open');
      this.onOpen();
    }
  }, {
    key: 'close',
    value: function close() {
      var sidePanelContainer = this.aclContainer; // reference to the Dom Element
      sidePanelContainer.classList.remove('is-open');
      this.onClose();
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      var _this3 = this;

      var sidePanelContainer = this.aclContainer; // reference to the Dom Element
      var switchClasses = function switchClasses() {
        sidePanelContainer.classList.toggle('is-open');
      };

      var triggerCallbacks = function triggerCallbacks() {
        return sidePanelContainer.classList.contains('is-open') ? _this3.onOpen() : _this3.onClose();
      };

      if (!e || !e.target.classList.contains('acl-panel-overlay')) {
        switchClasses();
        triggerCallbacks();
        // if the overlay is not clickable we ignore the event / overlay is disabled.
      } else if (this.props.clickableOverlay) {
        switchClasses();
        triggerCallbacks();
      }
    }
  }, {
    key: 'renderOverlay',
    value: function renderOverlay() {
      var _this4 = this;

      if (this.props.hasOverlay) {
        return _react2.default.createElement('div', { className: 'acl-panel-overlay', onClick: function onClick(e) {
            return _this4.toggle(e);
          } });
      }

      return '';
    }
  }, {
    key: 'renderCloseButton',
    value: function renderCloseButton() {
      var _this5 = this;

      if (this.props.hasCloseButton) {
        return _react2.default.createElement(
          'button',
          { className: 'panel__close', onClick: function onClick() {
              return _this5.close();
            } },
          _react2.default.createElement('i', { className: 'acl-i-times close__icon' })
        );
      }

      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { ref: function ref(dom) {
              return _this6.aclContainer = dom;
            }, className: this.getPanelClassName() },
          this.renderCloseButton(),
          _react2.default.createElement(
            'div',
            { className: 'panel__body' },
            _react2.default.createElement(
              'div',
              { className: 'panel__header' },
              _react2.default.createElement(
                'h2',
                { className: 'panel__title' },
                this.getTitleIcon(),
                this.props.title
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel__content' },
              this.props.children
            )
          )
        ),
        this.renderOverlay()
      );
    }
  }]);

  return SidePanel;
}(_react.Component);

SidePanel.propTypes = {
  /**
   * The content for the Side Panel
   */
  children: _react.PropTypes.node,
  /**
   * Text displaying as title at the top of the controller
   */
  title: _react.PropTypes.string,
  /**
   * Allow to display an icon next to the title, accept any icon string from the UI-ACL
   * @string
   */
  titleIcon: _react2.default.PropTypes.string,
  /**
   * Modify the side for displaying the panel [left, right] Default is right
   * @string One of the keys in the Object slideDirection
   */
  slideDirection: _react2.default.PropTypes.oneOf(Object.keys(slideDirection).map(function (key) {
    return key;
  })),
  /**
   * Modify the width of the panel
   * @string One of the keys in the Object Object panelWidths
   */
  width: _react2.default.PropTypes.oneOf(Object.keys(widths).map(function (key) {
    return key;
  })),
  /**
   * Allow to set the secondary theme of ACL
   * @string true or false, this is a string format not a boolean
   */
  secondaryTheme: _react2.default.PropTypes.bool,
  /**
   * Disable the click event for the overlay, default is click event enable
   * @string true or false, this is a string format not a boolean
   */
  clickableOverlay: _react2.default.PropTypes.bool,
  /**
   * Disable the displaying of the overlay, default is enable
   * @string true or false, this is a string format not a boolean
   */
  hasOverlay: _react2.default.PropTypes.bool,
  /**
   * Hide the close button of the top right corner, 
   * default is showing the button hasCloseButton="false"
   */
  hasCloseButton: _react2.default.PropTypes.bool,
  /**
   * Disable the event of key up "esc" default is enable
   */
  closeOnEscKeyDown: _react2.default.PropTypes.bool,
  /**
   * Callback for onOpen event
   */
  onOpen: _react2.default.PropTypes.func,
  /**
   * Callback for onClose event
   */
  onClose: _react2.default.PropTypes.func
};
SidePanel.defaultProps = {
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
exports.default = SidePanel;