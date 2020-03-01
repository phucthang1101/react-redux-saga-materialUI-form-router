/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "../../redux/configureStore";
import styles from "./styles.js";

import Taskboard from "../Taskboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading";
import theme from "../../commons/Theme";
import { ThemeProvider } from "@material-ui/styles";
import Modal from "../../components/Modal";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ADMIN_ROUTES, ROUTES } from "../../constants/index";
import AdminLayoutRoute from "../../commons/Layout/AdminLayoutRoute";
import DefaultLayoutRoute from "../../commons/Layout/DefaultLayoutRoute";

const store = configureStore();

class App extends Component {
  renderAdminRoute = () => {
    let xhtml = null;

    xhtml = ADMIN_ROUTES.map((route, index) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          component={route.component}
          exact={route.exact}
          path={route.path}
          name={route.name}
        />
      );
    });
    return xhtml;
  };

  renderDefaultRoute = () => {
    let xhtml = null;

    xhtml = ROUTES.map((route, index) => {
      return (
        <DefaultLayoutRoute
          key={route.path}
          component={route.component}
          exact={route.exact}
          path={route.path}
          name={route.name}
        />
      );
    });
    return xhtml;
  };

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <div className="App">
              <ToastContainer />
              <GlobalLoading />
              <Modal />
              <Switch>
                {this.renderAdminRoute()}
                {this.renderDefaultRoute()}
              </Switch>
            </div>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
