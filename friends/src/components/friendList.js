import React from 'react';
import Friend from './friend';
import { connect } from 'react-redux';
import deleteFriend from '../reducers';

const FriendList = (props) => {
  return(
    <div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, {deleteFriend})(FriendList);
