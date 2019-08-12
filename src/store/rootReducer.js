import {combineReducers} from "redux";
import episodes from './episodes/reducer';
import characters from './characters/reducer';
import users from './users/reducer'
import login from './login/reducer'

export default combineReducers({
  episodes,
  characters,
  users,
  login
});