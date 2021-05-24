import axios from "axios";
import { GET_DATA_FAILURE, DATA_SUCCESS, ADD_DATA, MUTATE_DATA } from "../actionTypes";

const apiUrl = "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates";

export const hasfailed = (message) => {
  return {
    type: GET_DATA_FAILURE,
    payload: message,
  };
};

export const hasSucceed = () => {
  return {
    type: DATA_SUCCESS,
    payload: "sucessful",
  };
};

export const addData = (data) => {
  return {
    type: MUTATE_DATA,
    payload: data,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    return axios
      .get(apiUrl)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: ADD_DATA,
          payload: data,
        });
        hasSucceed();
      })
      .catch((error) => {
        hasfailed(error);
      });
  };
};
