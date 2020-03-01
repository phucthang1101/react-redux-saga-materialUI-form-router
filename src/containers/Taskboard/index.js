import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";
import SearchBox from "../../components/SearchBox";
import TaskList from "../../components/TaskList";
import { STATUSES } from "../../constants/index.js";
import TaskForm from "../TaskForm";
import styles from "./style";
import { Box } from "@material-ui/core";

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  handleEditTask = task => {
    const { taskActionCreators, modalActionCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;

    setTaskEditing(task);

    const {
      showModal,
      changeModalTitle,
      changeModalContent
    } = modalActionCreators;
    showModal();
    changeModalTitle("Cập nhật công việc");
    changeModalContent(<TaskForm />);
  };

  showModalDeleteTask = task => {
    const { taskActionCreators, modalActionCreators, classes } = this.props;
    const { setTaskEditing } = taskActionCreators;

    const {
      showModal,
      changeModalTitle,
      changeModalContent,
      hideModal
    } = modalActionCreators;
    showModal();
    changeModalTitle("Xoá công việc");
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Bạn có chắc chắn muốn xóa
          {" "}
          <span className={classes.modalConfirmTextBold}>{task.title}</span>
          {` ?`}
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" onClick={hideModal}>Hủy Bỏ</Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleDeleteTask(task)}
            >
              Xóa
            </Button>
          </Box>
        </Box>
      </div>
    );
  };

  handleDeleteTask = task => {
   const {id} = task;
   const { taskActionCreators, modalActionCreators } = this.props;
    const { deleteTask } = taskActionCreators;
    deleteTask(id);

  };

  renderBoard = () => {
    const { classes } = this.props;
    const { listTask } = this.props;

    let xhtml = null;
    xhtml = (
      <Grid container spacing={3}>
        {STATUSES.map(status => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value
          );
          return (
            <TaskList
              taskFiltered={taskFiltered}
              status={status}
              key={status.value}
              onClickEdit={this.handleEditTask}
              onClickDelete={this.showModalDeleteTask}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  HandleClose = () => {
    this.setState({
      open: false
    });
  };

  openForm = () => {
    const { modalActionCreators, taskActionCreators } = this.props;

    const {
      showModal,
      changeModalTitle,
      changeModalContent
    } = modalActionCreators;
    showModal();
    changeModalTitle("Thêm mới công việc");
    changeModalContent(<TaskForm />);

    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(null);
  };

  renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  };

  handleFilter = event => {
    const { value } = event.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  renderForm = () => {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.HandleClose} />;
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.TaskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Thêm mới công việc
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    setTaskEditing: PropTypes.func,
    filterTask: PropTypes.func,
    deleteTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalContent: PropTypes.func,
    changeModalTitle: PropTypes.func
  })
};

const mapStateToProps = (state, ownProps) => {
  return {
    listTask: state.task.listTask
  };
};
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch)
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
