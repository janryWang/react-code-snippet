import React from "react"
import styled from "styled-components"
import Hlt from "react-highlight"

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

    renderCode() {
      const { code } = this.props
      const { codeShow } = this.state
      if (codeShow) {
        return (
          <div className="demo-code-wrapper">
            <Hlt language="jsx">{code || ""}</Hlt>
          </div>
        )
      }
    }

    render() {
      const { className, children } = this.props
      return (
        <div className={className}>
          <div className="demo-wrapper">
            {children}
            {this.renderButton()}
          </div>
          {this.renderCode()}
        </div>
      )
    }
  }
)`
  border: 1px solid #eee;
  padding: 20px;
  .demo-wrapper {
    position: relative;
  }
  pre{
    background:none;
  }
  .code-expand-icon-show {
    position: absolute;
    right: 0px;
    bottom: -10px;
    height: 20px;
    cursor: pointer;
  }
  .code-expand-icon-hide {
    position: absolute;
    right: 0px;
    bottom: -10px;
    height: 20px;
    cursor: pointer;
  }
  .demo-code-wrapper {
    margin-top: 20px;
    border-top: 1px dashed #eee;
    .hljs {
      border-radius: 5px;
    }
  }
  .hljs-comment,
.hljs-quote {
  color: #d4d0ab;
}

.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
  color: #ffa07a;
}

.hljs-number,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
  color: #f5ab35;
}

.hljs-attribute {
  color: #ffd700;
}

.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #abe338;
}

.hljs-title,
.hljs-section {
  color: #00e0e0;
}

.hljs-keyword,
.hljs-selector-tag {
  color: #dcc6e0;
}

.hljs {
  display: block;
  overflow-x: auto;
  background: #2b2b2b;
  color: #f8f8f2;
  padding: 0.5em;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

@media screen and (-ms-high-contrast: active) {
  .hljs-addition,
  .hljs-attribute,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-bullet,
  .hljs-comment,
  .hljs-link,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-params,
  .hljs-string,
  .hljs-symbol,
  .hljs-type,
  .hljs-quote {
      color: highlight;
  }

  .hljs-keyword,
  .hljs-selector-tag {
      font-weight: bold;
  }
`
ReactCodeSinppet.default = ReactCodeSinppet
module.exports = ReactCodeSinppet
