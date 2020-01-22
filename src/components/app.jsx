import React, { Component } from "react";
import Layout from "./layout";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let msg;

    if (this.state.msg !== "") {
      msg = <p>{this.state.msg}</p>;
    } else {
      msg = "";
    }
    return (
      <React.Fragment>
        <Layout {...this.props} />
      </React.Fragment>
    );
  }
}
export default App;
