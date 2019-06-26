import React from 'react';
import './App.css';
import FriendForm from "./components/friendForm";
import FriendList from "./components/friendList";
import { getFriends } from "./actions/getFriends";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    console.log("Hello");
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <FriendForm/>
        <FriendList/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  }
}

export default connect(mapStateToProps,{getFriends})(App);
