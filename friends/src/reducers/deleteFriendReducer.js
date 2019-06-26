import {DELETE_FRIEND_START, DELETE_FRIEND_SUCCESS, DELETE_FRIEND_FAILURE} from '../actions/deleteFriend';

const initialState = {
  friends: [],
  error: "",
  isLoading: false
}

export const deleteFriendReducer = (state = initialState, action) => {
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
