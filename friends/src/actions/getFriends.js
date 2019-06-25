import axios from 'axios';

export const GET_FRIENDS_START = "GET_FRIENDS_START";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({type: GET_FRIENDS_START});
  axios.get('http://localhost:5000/api/friends')
  .then(response => dispatch({
    type: GET_FRIENDS_SUCCESS,
    payload: response.data
  }))
  .catch(error => dispatch({
    type: GET_FRIENDS_FAILURE,
    payload: error
  }))
}
