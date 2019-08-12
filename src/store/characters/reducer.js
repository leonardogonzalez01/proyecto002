import {initialState} from "./initialState";
import {
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_INIT,
  GET_CHARACTERS_SUCCESS,
} from "./const";

export default function (state = initialState, action) {
  //debugger;
  switch (action.type) {
    case GET_CHARACTERS_INIT: {
      return {
        ...state,
        charactersLoading: true
      }
    }
    case GET_CHARACTERS_SUCCESS: {
      return {
        ...state,
        characters: state.characters.concat(action.payload.results),
        info: action.payload.info,
        charactersLoading: false,
        charactersError: false,
      }
    }
    case GET_CHARACTERS_ERROR: {
      return {
        ...state,
        characters: state.characters,
        charactersLoading: false,
        charactersError: true,
      }
    }
    default: {
      return state
    }
  }
}