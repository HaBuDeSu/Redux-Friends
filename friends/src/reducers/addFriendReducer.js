import {ADD_FRIEND_START, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILURE} from '../actions/addFriend';

const initialState = {
  friends: [],
  error: "",
  isLoading: false
}

export const addFriendReducer = (state = initialState, action) => {
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
