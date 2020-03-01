import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import { Route } from "react-router-dom";
import DashBoard from '../../../components/DashBoard';
import PropTypes from 'prop-types';

class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return (
            <DashBoard {...remainProps}>
              <YourComponent {...routeProps} />
            </DashBoard>
          );
        }}
      />
    );
  }
}

AdminLayoutRoute.propTypes={
    route:PropTypes.object
}
export default withStyles(styles)(AdminLayoutRoute);
