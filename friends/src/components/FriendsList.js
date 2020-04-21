import React from "react";

// import Loader from "react-loader-spinner"
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
      <div>
        {this.state.friends.map((item) => {
          return <p>{item.name}</p>;
        })}
      </div>
    );
  }
}

export default FriendsList;
