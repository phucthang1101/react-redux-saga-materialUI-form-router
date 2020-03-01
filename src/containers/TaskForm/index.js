import { Box, Grid, MenuItem,Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as modalActions from "../../actions/modal";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../components/FormHelper/TextField";
import renderSelectField from "../../components/FormHelper/Select";
import validate from "./validate";
import * as taskActions from "../../actions/task";

class TaskForm extends Component {
  handleSubmitForm = data => {
    const { taskActionCreators,taskEditing } = this.props;
    const { addTask,updateTask } = taskActionCreators;
    const { title, description , status} = data;
    if (taskEditing && taskEditing.id) {
      updateTask(title, description , status)
    }
    else{
      addTask(title, description);
    }
    
  };

  renderStatusSelection = () => {
    const { taskEditing, classes } = this.props;
    let xhtml = null;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Grid item md={12}>
          <Field
            id="title"
            name="status"
            component={renderSelectField}
            label="Trạng thái"
           
            className={classes.textField}
          >
            <MenuItem value={0}>Ready</MenuItem>
            <MenuItem value={1}>In Progress</MenuItem>
            <MenuItem value={2}>Completed</MenuItem>
          </Field>
        </Grid>
      );
    }
    return xhtml;
  };

  render() {
    const {
      open,
      classes,
      modalActionCreators,
      invalid,
      submitting,
      handleSubmit,
      taskEditing
    } = this.props;

    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container spacing={8}>
          <Grid item md={12}>
            <Field
              id="title"
              name="title"
              component={renderTextField}
              label="Tiêu đề"
              margin="normal"
              className={classes.textField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              name="description"
              component={renderTextField}
              rowsmax="4"
              label="Mô tả"
              multiline
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          {this.renderStatusSelection()}
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button variant="contained" onClick={hideModal}>
                  Hủy Bỏ
                </Button>
              </Box>
              <Button
                disabled={invalid || submitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                Lưu Lại
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => {
  return {
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
    taskEditing: state.task.taskEditing,
    initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      description: state.task.taskEditing
        ? state.task.taskEditing.description
        : null,
      status: state.task.taskEditing ? state.task.taskEditing.status : null
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    taskActionCreators: bindActionCreators(taskActions, dispatch)
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = "TASK_MANAGEMENT";

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
