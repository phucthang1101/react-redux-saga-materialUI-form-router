import React, { Component } from "react";
import {
  withStyles,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

class SignupPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.myBackground}>
        <div className={classes.signup}>
          <Card className={classes.root}>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="h5" component="h2">
                    Đăng kí tài khoản
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
                <TextField
                  id="cpassword"
                  label="Confirm Password"
                  type="password"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <FormControlLabel
                  control={<Checkbox value="agree" />}
                  label="Tôi đã đọc chính sách và đồng ý điều khoản"
                  className={classes.fullWidth}
                />
                <Button variant="contained" color="primary" fullWidth type="submit">
                  Sign up
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/login">
                    <Button>Đã có tài khoản</Button>
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

export default withStyles(styles)(SignupPage);
