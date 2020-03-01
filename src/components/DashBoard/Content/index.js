import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Content extends Component {
  render() {
    return (
      <div>
        <h1>DashBoard</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Content);
