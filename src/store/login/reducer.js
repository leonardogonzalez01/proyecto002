import {initialState} from "./initialState";
import {TYPE_IS_LOGIN} from "./const";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPE_IS_LOGIN: {
      return {
        ...state, isLogin: action.payload
      };
    }
    default: {
      return state;
    }
  }
};