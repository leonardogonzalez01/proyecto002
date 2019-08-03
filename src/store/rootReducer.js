import {combineReducers} from "redux";
import users from './users/reducer';
import episodes from './episodes/reducer'

export default combineReducers({
  users,
  episodes
})