import {initialState} from "./initialState";
import {
  GET_EPISODES_ERROR,
  GET_EPISODES_INIT,
  GET_EPISODES_SUCCESS
} from "./const";

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EPISODES_INIT: {
      return {
        ...state,
        episodesLoading: true

      }
    }
    case GET_EPISODES_SUCCESS: {
      return {
        ...state,
        episodes: state.episodes.concat(action.payload.results),
       //episodes: action.payload.results,
        info: action.payload.info,
        episodesLoading: false,
        episodesError: false,
      }
    }
    case GET_EPISODES_ERROR: {
      return {
        ...state,
        episodes: state.episodes,
        episodesLoading: false,
        episodesError: true,
      }
    }
    default: {
      return state
    }
  }
}