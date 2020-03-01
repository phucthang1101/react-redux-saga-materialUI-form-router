import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Drawer } from "@material-ui/core";
import { ADMIN_ROUTES } from "../../../constants/index";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  toggleDrawer = value => {
    const { onToggleSideBar } = this.props;
    if (onToggleSideBar) {
      onToggleSideBar(value);
    }
  };

  renderList = () => {
    const { classes, showSidebar } = this.props;
    let xhtml = null;

    xhtml = (
      <div className={classes.list}>
        <List component="nav">
          {ADMIN_ROUTES.map((route, index) => {
            return (
              <NavLink
                to={route.path}
                exact={route.exact}
                className={classes.MenuLink}
                activeClassName={classes.MenuLinkActive}
                key={route.path}
              >
                <ListItem key={route.path} className={classes.listItem} button>
                  {route.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  };

  render() {
    const { classes, showSidebar } = this.props;
    return (
      <Drawer
        open={showSidebar}
        onClose={() => this.toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper
        }}
        variant="persistent"
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
