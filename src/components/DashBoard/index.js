import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import Header from "./Header/index";
import Sidebar from "./Sidebar/index";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as uiActions from "../../actions/ui";
import cn from 'classnames';

class DashBoard extends Component {


  handleToggleSidebar = value => {
    
    const { uiActionCreators } = this.props;
    const { showSidebar, hideSidebar } = uiActionCreators;
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  };

  render() {
    const { children, classes, name, showSidebar } = this.props;
    
    return (
      <div className={classes.DashBoard}>
        <Header
          name={name}
          showSidebar={showSidebar}
          onToggleSidebar={this.handleToggleSidebar}
        />
        <div className={classes.wrapper}>
          <Sidebar
            showSidebar={showSidebar}
            onToggleSideBar={this.onToggleSideBar}
          />
          <div className={cn(classes.wrapperContent,{
            [classes.shiftLeft]: showSidebar === false
          })}>{children}</div>
        </div>
      </div>
    );
  }
}
DashBoard.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
  showSidebar: PropTypes.bool
};
const mapStateToProps = (state, ownProps) => {
  return {
    showSidebar: state.ui.showSidebar
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    uiActionCreators: bindActionCreators(uiActions, dispatch)
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, withStyles(styles))(DashBoard);
