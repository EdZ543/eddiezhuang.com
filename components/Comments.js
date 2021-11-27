import React, { Component } from 'react'

export default class Components extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    let scriptEl = document.createElement("script");
    scriptEl.setAttribute("src", "https://utteranc.es/client.js")
    scriptEl.setAttribute("repo", "EdZ543/eddiezhuang.com-Comments")
    scriptEl.setAttribute("issue-term", this.props.id)
    scriptEl.setAttribute("theme", "dark-blue")
    scriptEl.setAttribute("crossorigin", "anonymous")
    scriptEl.setAttribute("async", true)
    this.commentBox.current.appendChild(scriptEl)
  }

  render() {
    return (
      <div className="w-full">
        <div ref={this.commentBox}></div>
      </div>
    )
  }
}