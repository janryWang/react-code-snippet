import React from "react"
import { getParameters } from "codesandbox/lib/api/define"
import styled from "styled-components"

const CodeIcon = () => (
  <svg
    t="1553134553729"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1957"
  >
    <path
      d="M737.828571 166.857143l0.457143-0.228572h0.228572L512 36.571429 285.6 166.628571h-0.228571l0.8 0.342858L100 274.285714v475.428572L512 987.428571l412-237.714285V274.285714l-186.171429-107.428571zM478.514286 890.971429L314.971429 796.571429V637.028571L166.857143 552.914286V353.028571l311.657143 179.771429v358.171429zM199.085714 294.285714l153.942857-88.914285 158.742858 91.085714 158.971428-91.314286 154.514286 89.142857-313.028572 180.571429-313.142857-180.571429zM857.142857 553.485714l-147.2 83.542857v158.971429l-164.457143 94.857143V533.028571L857.142857 353.257143v200.228571z"
      p-id="1958"
    />
  </svg>
)

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-type" />
    <title>React Code Snippet Demo</title>
  </head>
  <body>
    <div id="root" style="margin:20px"></div>
  </body>
</html>
`

const dependencies = window.codeSandBoxDependencies

const peerDependencies = window.codeSandBoxPeerDependencies

const filterDeps = (code = "", deps) => {
  return Object.keys(deps || {}).reduce((buf, key) => {
    if (code.indexOf(key) > -1) {
      buf[key] = deps[key]
    }
    return buf
  }, {})
}

export default styled(({ code, className }) => {
  const parameters = getParameters({
    files: {
      "package.json": {
        content: {
          dependencies: {
            react: "latest",
            "react-dom": "latest",
            ...filterDeps(code, dependencies),
            ...peerDependencies
          }
        }
      },
      "index.js": {
        content: code
      },
      "index.html": {
        content: html
      }
    }
  })
  return (
    <form
      action="https://codesandbox.io/api/v1/sandboxes/define"
      method="POST"
      target="_blank"
      className={className}
    >
      <input type="hidden" name="parameters" value={parameters} />
      <button type="submit" className="code-sandbox-btn">
        <CodeIcon />
      </button>
    </form>
  )
})`
  margin: 0;
  padding: 0;
  .code-sandbox-btn {
    border: none;
    padding: 0;
    margin: 0;
    width: 16px;
    height: 16px;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
      fill: #555;
    }
  }
`
