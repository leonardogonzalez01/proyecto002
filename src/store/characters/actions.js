import { GET_CHARACTERS_ERROR,GET_CHARACTERS_INIT,GET_CHARACTERS_SUCCESS} from "./const";

import {getCharacters} from "./server";

export const getCharactersAction = url => {
  return dispatch => {
    dispatch({type: GET_CHARACTERS_INIT});
    getCharacters(url).then(response => {
      dispatch({type: GET_CHARACTERS_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: GET_CHARACTERS_ERROR})
    })
  }
};