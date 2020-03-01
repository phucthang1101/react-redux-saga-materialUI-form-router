import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import TaskItem from "../TaskItem";
import PropTypes from "prop-types";

class TaskList extends Component {
  render() {
    const { classes, status, taskFiltered ,onClickEdit,onClickDelete} = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={1} mb={1}>
          <div className={classes.status}>{status.label}</div>
        </Box>

        <div className={classes.wrapperListTask}>
          {taskFiltered.map(task => {
            return (
              <TaskItem
                task={task}
                status={status}
                key={task.id}
                onClickEdit={() => onClickEdit(task)}
                onClickDelete={() => onClickDelete(task)}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  status: PropTypes.object,
  taskFiltered: PropTypes.array
};

export default withStyles(styles)(TaskList);
