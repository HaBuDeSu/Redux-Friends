import {GET_FRIENDS_START, GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILURE} from '../actions/getFriends';

const initialState = {
  friends: [],
  error: "",
  isLoading: false
}

export const getFriendsReducer = (state = initialState, action) => {
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
