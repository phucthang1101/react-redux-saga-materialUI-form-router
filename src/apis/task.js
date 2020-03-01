/* eslint-disable import/prefer-default-export */
import { API_ENDPOINT } from '../constants';
import AxiosService from '../commons/axiosService';
import qs from 'query-string';

const url = 'tasks';

export const getList =(params={}) =>{
    let queryParams = '';
   
    if(Object.keys(params).length > 0)
    {
        queryParams = `?${qs.stringify(params)}`;
        console.log('api: ',queryParams);
       
    }
    return AxiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};


// http://localhost:3000/tasks METHOD: POST
export const addTask = data => {
    return AxiosService.post(`${API_ENDPOINT}/${url}`, data);
  };
  
  // http://localhost:3000/tasks/:id METHOD: PUT
  export const updateTask = (data, taskId) => {
    return AxiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data);
  };
  
  // http://localhost:3000/tasks/:id METHOD: DELETE
  export const deleteTask = taskId => {
    return AxiosService.delete(`${API_ENDPOINT}/${url}/${taskId}`);
  };
