import React, { Component } from "react";
import NavBar from "./nav";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div id="content">{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default Layout;
