import {GET_FRIENDS_START, GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILURE} from '../actions/getFriends';
import {ADD_FRIEND_START, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILURE} from '../actions/addFriend';
import {DELETE_FRIEND_START, DELETE_FRIEND_SUCCESS, DELETE_FRIEND_FAILURE} from '../actions/deleteFriend';
import {UPDATE_FRIEND_START, UPDATE_FRIEND_SUCCESS, UPDATE_FRIEND_FAILURE} from '../actions/updateFriend';

const initialState = {
  friends: [],
  error: "",
  isLoading: false
}

const getFriendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_FRIENDS_START:
      return {
        ...state,
        error: "",
        isLoading: true
      }
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        error: "",
        isLoading: false
      }
    case GET_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default: return state
  }
}

const addFriendReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FRIEND_START:
      return {
        ...state,
        error: "",
        isLoading: true
      }
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        error: "",
        isLoading: false
      }
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default: return state
  }
}

const deleteFriendReducer = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_FRIEND_START:
      return {
        ...state,
        error: "",
        isLoading: true
      }
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        error: "",
        isLoading: false
      }
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default: return state
  }
}

const updateFriendReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_FRIEND_START:
      return {
        ...state,
        error: "",
        isLoading: true
      }
    case UPDATE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        error: "",
        isLoading: false
      }
    case UPDATE_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default: return state
  }
}
