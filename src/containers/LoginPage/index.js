import React, { Component } from "react";
import { withStyles, Typography, Button, TextField } from "@material-ui/core";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import {Link} from "react-router-dom";

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.myBackground}>
        <div className={classes.login}>
          <Card className={classes.root}>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="h5" component="h2">
                    Đăng nhập để tiếp tục
                  </Typography>
                </div>
                <TextField
                  id="email"
                  label="email"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="password"
                  type="password"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" fullWidth type="submit">
                  Login
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/signup">
                    <Button>Đăng kí tài khoản</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
