import React from "react"
import styled from "styled-components"
import Hlt from "react-highlight"
import CodeSandBox from "./code-sandbox"

const ReactCodeSinppet = styled(
  class extends React.Component {
    state = {}

    changeState = () => {
      this.setState({
        codeShow: !this.state.codeShow
      })
    }

    renderButton() {
      const { codeShow } = this.state
      if (codeShow) {
        return (
          <img
            alt="expand code"
            onClick={this.changeState}
            src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
            className="code-expand-icon-show"
          />
        )
      } else {
        return (
          <img
            alt="expand code"
            onClick={this.changeState}
            src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
            className="code-expand-icon-hide"
          />
        )
      }
    }

    renderHlt() {
      let { code, lang } = this.props
      if (lang == "jsx") {
        lang = "javascript"
      }
      if (lang == "html" || lang == "htm") {
        lang = "htmlbars"
      }
      if (lang == "css" || lang == "sass" || lang == "less") {
        lang = "scss"
      }
      return (
        <Hlt
          language={lang}
          languages={["javascript", "typescript", "scss", "htmlbars", "bash"]}
        >
          {code || ""}
        </Hlt>
      )
    }

    renderCode() {
      const { codeShow } = this.state
      if (codeShow) {
        return <div className="demo-code-wrapper">{this.renderHlt()}</div>
      }
    }

    render() {
      const { className, children, lang, code } = this.props
      if (lang !== "jsx") {
        return (
          <div className={`${className} just-code`}>
            <div className="demo-code-wrapper">{this.renderHlt()}</div>
          </div>
        )
      }
      return (
        <div className={className}>
          <div className="demo-wrapper">
            {children}
            {this.renderButton()}
            <CodeSandBox className="code-sandbox" code={code} />
          </div>
          {this.renderCode()}
        </div>
      )
    }
  }
)`
  border: 1px solid #eee;
  padding: 20px;
  margin-bottom: 20px;
  overflow: auto;
  &.just-code {
    padding: 0;
    border: none;
  }
  .demo-wrapper {
    position: relative;
    padding-bottom: 20px;
    overflow: visible;
  }
  pre {
    background: none;
    padding: 16px 0;
    margin: 0;
  }
  &.just-code {
    pre {
      padding: 0;
      margin: 0;
    }
  }
  .code-expand-icon-show {
    position: absolute;
    right: 0px;
    bottom: -5px;
    height: 20px;
    cursor: pointer;
  }
  .code-expand-icon-hide {
    position: absolute;
    right: 0px;
    bottom: -5px;
    height: 20px;
    cursor: pointer;
  }
  .code-sandbox {
    position: absolute;
    right: 30px;
    bottom: -7px;
    height: 20px;
    cursor: pointer;
  }
  .demo-code-wrapper {
    margin-top: 20px;
    border-top: 1px dashed #eee;
    .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em;
      color: #333;
      background: #f8f8f8;
    }

    .hljs-comment,
    .hljs-quote {
      color: #998;
      font-style: italic;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-subst {
      color: #333;
      font-weight: bold;
    }

    .hljs-number,
    .hljs-literal,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-tag .hljs-attr {
      color: #008080;
    }

    .hljs-string,
    .hljs-doctag {
      color: #d14;
    }

    .hljs-title,
    .hljs-section,
    .hljs-selector-id {
      color: #900;
      font-weight: bold;
    }

    .hljs-subst {
      font-weight: normal;
    }

    .hljs-type,
    .hljs-class .hljs-title {
      color: #458;
      font-weight: bold;
    }

    .hljs-tag,
    .hljs-name,
    .hljs-attribute {
      color: #000080;
      font-weight: normal;
    }

    .hljs-regexp,
    .hljs-link {
      color: #009926;
    }

    .hljs-symbol,
    .hljs-bullet {
      color: #990073;
    }

    .hljs-built_in,
    .hljs-builtin-name {
      color: #0086b3;
    }

    .hljs-meta {
      color: #999;
      font-weight: bold;
    }

    .hljs-deletion {
      background: #fdd;
    }

    .hljs-addition {
      background: #dfd;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: bold;
    }
  }
  &.just-code {
    .demo-code-wrapper {
      border: none;
    }
  }
`
ReactCodeSinppet.default = ReactCodeSinppet
module.exports = ReactCodeSinppet
