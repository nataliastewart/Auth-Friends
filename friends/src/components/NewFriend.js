import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class NewFriend extends React.Component {
  //   constructor() {
  //     super();
  state = {
    newFriend: {
      name: "",
      age: "",
      email: "",
    },
  };
  //   }

  handleChange = (e) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value,
      },
    });
  };

  addFriend = (e) => {
    axiosWithAuth()
      .post("/api/friends", this.state.newFriend)
      .then((res) => {
        // console.log("NEWFRIEND PROPS", props);
        this.setState({
          newFriend: {
            ...this.state.newFriend,
          },
        });
        this.props.history.push("/friends", res.data);
      })
      .catch((err) => {
        console.log("Error NEWFRIEND", err);
      });
  };

  render() {
    return (
      <form onSubmit={this.addFriend}>
        <h2>Add a new Friend</h2>
        <input
          text="type"
          name="name"
          placeholder="Name"
          value={this.state.newFriend.name}
          onChange={this.handleChange}
        />
        <input
          text="type"
          name="age"
          placeholder="Age"
          value={this.state.newFriend.age}
          onChange={this.handleChange}
        />
        <input
          text="type"
          name="email"
          placeholder="Email"
          value={this.state.newFriend.email}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewFriend;
