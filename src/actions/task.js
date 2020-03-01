import * as taskAPI from "../apis/task";
import * as taskConstants from "../constants/task";
import { STATUS_CODE } from "../constants";

/*
  * B1: fetchListTaskRequest()

  * B2: Reset : state task =[] => dispatch fetchListTask

  * B3: fetchListTaskSuccess || fetchListTaskFail



*/

export const fetchListTask = (params={}) => {
  return {
    type: taskConstants.FETCH_TASK,
    payload:{
      params,
    }
  };
};

export const fetchListTaskSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const fetchListTaskFail = err => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      err
    }
  };
};

export const fetchListTaskRequest = () => dispatch => {
  dispatch(fetchListTask());
  taskAPI
    .getList()
    .then(res => {
      const { data } = res;
      dispatch(fetchListTaskSuccess(data));
    })
    .catch(err => {
      dispatch(fetchListTaskFail(err));
    });
};

export const filterTask = keyword => {
  return {
    type: taskConstants.FILTER_TASK,
    payload: {
      keyword
    }
  };
};

export const filterTaskSuccess = data => {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const addTask = (title,description) => {
  return {
    type: taskConstants.ADD_TASK,
    payload:{
      title,
      description
    }
  };
};

export const addTaskSuccess = (data) => {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const addTaskFail = err => {
  return {
    type: taskConstants.ADD_TASK_FAILED,
    payload: {
      err
    }
  };
};



export const setTaskEditing = (task) => {
  return {
    type: taskConstants.SET_TASK_EDITING,
    payload:{
      task,
    }
  };
};


export const updateTask = (title,description,status = STATUS_CODE[0].value) => {
  return {
    type: taskConstants.UPDATE_TASK,
    payload:{
      title,
      description,
      status
    }
  };
};

export const updateTaskSuccess = (data) => {
  return {
    type: taskConstants.UPDATE_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const updateTaskFail = err => {
  return {
    type: taskConstants.UPDATE_TASK_FAILED,
    payload: {
      err
    }
  };
};



export const deleteTask = (id) => {
  return {
    type: taskConstants.DELETE_TASK,
    payload:{
      id
    }
  };
};

export const deleteTaskSuccess = (data) => {
  return {
    type: taskConstants.DELETE_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const deleteTaskFail = err => {
  return {
    type: taskConstants.DELETE_TASK_FAILED,
    payload: {
      err
    }
  };
};


