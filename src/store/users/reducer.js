import {initialState} from "./initialState";
import {
  ADD_USERS,
  GET_USERS_ERROR,
  GET_USERS_INIT,
  GET_USERS_SUCCESS
} from "./const";

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS_INIT: {
      return {
        ...state,
        usersLoading: true

      }
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
       users: state.users.concat(action.payload),
        //users: action.payload,
        usersLoading: false,
        usersError: false,
      }
    }
    case GET_USERS_ERROR: {
      return {
        ...state,
        users: state.users,
        usersLoading: false,
        usersError: true,
      }
    }
    default: {
      return state
    }
  }
}