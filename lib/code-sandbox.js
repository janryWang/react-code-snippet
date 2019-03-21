"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _define = require("codesandbox/lib/api/define");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: 0;\n  .code-sandbox-btn {\n    border: none;\n    padding: 0;\n    margin: 0;\n    width: 16px;\n    height: 16px;\n    cursor: pointer;\n    svg {\n      width: 100%;\n      height: 100%;\n      fill: #555;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var CodeIcon = function CodeIcon() {
  return _react.default.createElement("svg", {
    t: "1553134553729",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "1957"
  }, _react.default.createElement("path", {
    d: "M737.828571 166.857143l0.457143-0.228572h0.228572L512 36.571429 285.6 166.628571h-0.228571l0.8 0.342858L100 274.285714v475.428572L512 987.428571l412-237.714285V274.285714l-186.171429-107.428571zM478.514286 890.971429L314.971429 796.571429V637.028571L166.857143 552.914286V353.028571l311.657143 179.771429v358.171429zM199.085714 294.285714l153.942857-88.914285 158.742858 91.085714 158.971428-91.314286 154.514286 89.142857-313.028572 180.571429-313.142857-180.571429zM857.142857 553.485714l-147.2 83.542857v158.971429l-164.457143 94.857143V533.028571L857.142857 353.257143v200.228571z",
    "p-id": "1958"
  }));
};

var html = "\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-type\" />\n    <title>React Code Snippet Demo</title>\n  </head>\n  <body>\n    <div id=\"root\" style=\"margin:20px\"></div>\n  </body>\n</html>\n";
var dependencies = window.codeSandBoxDependencies;
var peerDependencies = window.codeSandBoxPeerDependencies;

var filterDeps = function filterDeps(code, deps) {
  if (code === void 0) {
    code = "";
  }

  return Object.keys(deps || {}).reduce(function (buf, key) {
    if (code.indexOf(key) > -1) {
      buf[key] = deps[key];
    }

    return buf;
  }, {});
};

var _default = (0, _styledComponents.default)(function (_ref) {
  var code = _ref.code,
      className = _ref.className;
  var parameters = (0, _define.getParameters)({
    files: {
      "package.json": {
        content: {
          dependencies: _extends({
            react: "latest",
            "react-dom": "latest"
          }, filterDeps(code, dependencies), peerDependencies)
        }
      },
      "index.js": {
        content: code
      },
      "index.html": {
        content: html
      }
    }
  });
  return _react.default.createElement("form", {
    action: "https://codesandbox.io/api/v1/sandboxes/define",
    method: "POST",
    target: "_blank",
    className: className
  }, _react.default.createElement("input", {
    type: "hidden",
    name: "parameters",
    value: parameters
  }), _react.default.createElement("button", {
    type: "submit",
    className: "code-sandbox-btn"
  }, _react.default.createElement(CodeIcon, null)));
})(_templateObject());

exports.default = _default;