"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactHighlight = _interopRequireDefault(require("react-highlight"));

var _codeSandbox = _interopRequireDefault(require("./code-sandbox"));

var _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border: 1px solid #eee;\n  padding: 20px;\n  margin-bottom: 20px;\n  overflow:auto;\n  &.just-code {\n    padding: 0;\n    border: none;\n  }\n  .demo-wrapper {\n    position: relative;\n    padding-bottom: 20px;\n    overflow: visible;\n  }\n  pre {\n    background: none;\n    padding: 16px 0;\n    margin: 0;\n  }\n  &.just-code {\n    pre {\n      padding: 0;\n      margin: 0;\n    }\n  }\n  .code-expand-icon-show {\n    position: absolute;\n    right: 0px;\n    bottom: -5px;\n    height: 20px;\n    cursor: pointer;\n  }\n  .code-expand-icon-hide {\n    position: absolute;\n    right: 0px;\n    bottom: -5px;\n    height: 20px;\n    cursor: pointer;\n  }\n  .code-sandbox {\n    position: absolute;\n    right: 30px;\n    bottom: -7px;\n    height: 20px;\n    cursor: pointer;\n  }\n  .demo-code-wrapper {\n    margin-top: 20px;\n    border-top: 1px dashed #eee;\n    .hljs {\n      display: block;\n      overflow-x: auto;\n      padding: 0.5em;\n      color: #333;\n      background: #f8f8f8;\n    }\n\n    .hljs-comment,\n    .hljs-quote {\n      color: #998;\n      font-style: italic;\n    }\n\n    .hljs-keyword,\n    .hljs-selector-tag,\n    .hljs-subst {\n      color: #333;\n      font-weight: bold;\n    }\n\n    .hljs-number,\n    .hljs-literal,\n    .hljs-variable,\n    .hljs-template-variable,\n    .hljs-tag .hljs-attr {\n      color: #008080;\n    }\n\n    .hljs-string,\n    .hljs-doctag {\n      color: #d14;\n    }\n\n    .hljs-title,\n    .hljs-section,\n    .hljs-selector-id {\n      color: #900;\n      font-weight: bold;\n    }\n\n    .hljs-subst {\n      font-weight: normal;\n    }\n\n    .hljs-type,\n    .hljs-class .hljs-title {\n      color: #458;\n      font-weight: bold;\n    }\n\n    .hljs-tag,\n    .hljs-name,\n    .hljs-attribute {\n      color: #000080;\n      font-weight: normal;\n    }\n\n    .hljs-regexp,\n    .hljs-link {\n      color: #009926;\n    }\n\n    .hljs-symbol,\n    .hljs-bullet {\n      color: #990073;\n    }\n\n    .hljs-built_in,\n    .hljs-builtin-name {\n      color: #0086b3;\n    }\n\n    .hljs-meta {\n      color: #999;\n      font-weight: bold;\n    }\n\n    .hljs-deletion {\n      background: #fdd;\n    }\n\n    .hljs-addition {\n      background: #dfd;\n    }\n\n    .hljs-emphasis {\n      font-style: italic;\n    }\n\n    .hljs-strong {\n      font-weight: bold;\n    }\n  }\n  &.just-code {\n    .demo-code-wrapper {\n      border: none;\n    }\n  }\n"]);

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

  _proto.renderHlt = function renderHlt() {
    var _this$props = this.props,
        code = _this$props.code,
        lang = _this$props.lang;

    if (lang == "jsx") {
      lang = "javascript";
    }

    if (lang == "html" || lang == "htm") {
      lang = "htmlbars";
    }

    if (lang == "css" || lang == "sass" || lang == "less") {
      lang = "scss";
    }

    return _react.default.createElement(_reactHighlight.default, {
      language: lang,
      languages: ["javascript", "typescript", "scss", "htmlbars", "bash"]
    }, code || "");
  };

  _proto.renderCode = function renderCode() {
    var codeShow = this.state.codeShow;

    if (codeShow) {
      return _react.default.createElement("div", {
        className: "demo-code-wrapper"
      }, this.renderHlt());
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        className = _this$props2.className,
        children = _this$props2.children,
        lang = _this$props2.lang,
        code = _this$props2.code;

    if (lang !== "jsx") {
      return _react.default.createElement("div", {
        className: className + " just-code"
      }, _react.default.createElement("div", {
        className: "demo-code-wrapper"
      }, this.renderHlt()));
    }

    return _react.default.createElement("div", {
      className: className
    }, _react.default.createElement("div", {
      className: "demo-wrapper"
    }, children, this.renderButton(), _react.default.createElement(_codeSandbox.default, {
      className: "code-sandbox",
      code: code
    })), this.renderCode());
  };

  return _temp;
}(_react.default.Component), _temp))(_templateObject());
ReactCodeSinppet.default = ReactCodeSinppet;
module.exports = ReactCodeSinppet;