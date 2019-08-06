import {initialState} from "./initialState";
import {
  GET_EPISODE_ERROR,
  GET_EPISODE_INIT,
  GET_EPISODE_SUCCESS,
  GET_EPISODES_ERROR,
  GET_EPISODES_INIT,
  GET_EPISODES_SUCCESS
} from "./const";

export default function (state = initialState, action) {
  //debugger;
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
    /*case GET_EPISODE_INIT: {
      return {
        ...state,
        episodeLoading: true
      }
    }
    case GET_EPISODE_SUCCESS: {
      return {
        ...state,
        episode: action.payload.results,
        info: action.payload.info,
        episodeLoading: false,
        episodeError: false,
      }
    }
    case GET_EPISODE_ERROR: {
      return {
        ...state,
        episode: state.episodes,
        episodeLoading: false,
        episodeError: true,
      }
    }*/
    default: {
      return state
    }
  }
}