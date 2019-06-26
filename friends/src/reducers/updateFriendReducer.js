import {UPDATE_FRIEND_START, UPDATE_FRIEND_SUCCESS, UPDATE_FRIEND_FAILURE} from '../actions/updateFriend';

const initialState = {
  friends: [],
  error: "",
  isLoading: false
}

export const updateFriendReducer = (state = initialState, action) => {
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
