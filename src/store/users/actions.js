import { GET_USERS_ERROR, GET_USERS_INIT, GET_USERS_SUCCESS} from "./const";

import {getUsers} from "./server";

export const getUsersAction = url => {
  return dispatch => {
    dispatch({type: GET_USERS_INIT});
    getUsers(url).then(response => {
      dispatch({type: GET_USERS_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: GET_USERS_ERROR})
    })
  }
};