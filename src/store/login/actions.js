import {TYPE_IS_LOGIN} from "./const";

export const setIsLogin = value => {
    return dispatch => dispatch({type: TYPE_IS_LOGIN, payload: value});
};