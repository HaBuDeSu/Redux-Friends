import { combineReducers } from 'redux';
import { getFriendsReducer } from './getFriendsReducer';
import { addFriendReducer } from './addFriendReducer';
import { deleteFriendReducer } from './deleteFriendReducer';
import { updateFriendReducer } from './updateFriendReducer';

export default combineReducers({
  getFriendsReducer,
  addFriendReducer,
  deleteFriendReducer,
  updateFriendReducer
});
