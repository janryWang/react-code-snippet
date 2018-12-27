"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactHighlight = _interopRequireDefault(require("react-highlight"));

var _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border: 1px solid #eee;\n  padding: 20px;\n  .demo-wrapper {\n    position: relative;\n  }\n  pre{\n    background:none;\n  }\n  .code-expand-icon-show {\n    position: absolute;\n    right: 0px;\n    bottom: -10px;\n    height: 20px;\n    cursor: pointer;\n  }\n  .code-expand-icon-hide {\n    position: absolute;\n    right: 0px;\n    bottom: -10px;\n    height: 20px;\n    cursor: pointer;\n  }\n  .demo-code-wrapper {\n    margin-top: 20px;\n    border-top: 1px dashed #eee;\n    .hljs {\n      border-radius: 5px;\n    }\n  }\n  .hljs-comment,\n.hljs-quote {\n  color: #d4d0ab;\n}\n\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n  color: #ffa07a;\n}\n\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n  color: #f5ab35;\n}\n\n.hljs-attribute {\n  color: #ffd700;\n}\n\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #abe338;\n}\n\n.hljs-title,\n.hljs-section {\n  color: #00e0e0;\n}\n\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #dcc6e0;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #2b2b2b;\n  color: #f8f8f2;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .hljs-addition,\n  .hljs-attribute,\n  .hljs-built_in,\n  .hljs-builtin-name,\n  .hljs-bullet,\n  .hljs-comment,\n  .hljs-link,\n  .hljs-literal,\n  .hljs-meta,\n  .hljs-number,\n  .hljs-params,\n  .hljs-string,\n  .hljs-symbol,\n  .hljs-type,\n  .hljs-quote {\n      color: highlight;\n  }\n\n  .hljs-keyword,\n  .hljs-selector-tag {\n      font-weight: bold;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ReactCodeSinppet = (0, _styledComponents.default)((_temp =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(_temp, _React$Component);

  function _temp() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeState", function () {
      _this.setState({
        codeShow: !_this.state.codeShow
      });
    });

    return _this;
  }

  var _proto = _temp.prototype;

  _proto.renderButton = function renderButton() {
    var codeShow = this.state.codeShow;

    if (codeShow) {
      return _react.default.createElement("img", {
        alt: "expand code",
        onClick: this.changeState,
        src: "https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",
        className: "code-expand-icon-show"
      });
    } else {
      return _react.default.createElement("img", {
        alt: "expand code",
        onClick: this.changeState,
        src: "https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg",
        className: "code-expand-icon-hide"
      });
    }
  };

  _proto.renderCode = function renderCode() {
    var code = this.props.code;
    var codeShow = this.state.codeShow;

    if (codeShow) {
      return _react.default.createElement("div", {
        className: "demo-code-wrapper"
      }, _react.default.createElement(_reactHighlight.default, {
        language: "jsx"
      }, code || ''));
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        code = _this$props.code,
        justCode = _this$props.justCode,
        lang = _this$props.lang;

    if (justCode) {
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement("div", {
        className: "demo-code-wrapper"
      }, _react.default.createElement(_reactHighlight.default, {
        language: lang
      }, code || '')));
    }

    return _react.default.createElement("div", {
      className: className
    }, _react.default.createElement("div", {
      className: "demo-wrapper"
    }, children, this.renderButton()), this.renderCode());
  };

  return _temp;
}(_react.default.Component), _temp))(_templateObject());
ReactCodeSinppet.default = ReactCodeSinppet;
module.exports = ReactCodeSinppet;