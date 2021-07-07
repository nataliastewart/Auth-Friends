import React from "react";

// import Loader from "react-loader-spinner"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import NewFriend from "./NewFriend";
import { Route } from "react-router-dom";

class FriendsList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log("FRIENDSLIST RES", res);
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => console.log("FRIENDSLIST- ERROR", err));
  };

  render() {
    return (
      <div className="friends-container">
        <header>-FRIENDS LIST-</header>
        <NewFriend />
        {this.state.friends.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Age: {item.age}</p>
              <p>Email:{item.email}</p>
            </div>
          );
        })}
        <Route component={NewFriend} />
        {/* <NewFriend state={this.state} /> */}
      </div>
    );
  }
}

export default FriendsList;
