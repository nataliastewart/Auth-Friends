import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  name: "",
};

export default function AddFriend(props) {
  const [newFriend, setNewFriend] = useState(initialState);

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const addNewFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/friends`, newFriend)
      .then((res) => {
        console.log("ADD FRIEND-RE:", res);
        props.setFriendList(res.data);
        setNewFriend(initialState);
      })
      .catch((err) => console.log("ADD FRIEND ERROR:", err));
  };

  return (
    <div>
      <form onSubmit={addNewFriend}>
        <h3>Add a new Todo:</h3>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

//   addFriend = (e) => {
//     axiosWithAuth()
//       .post("/api/friends", this.state.newFriend)
//       .then((res) => {
//         // console.log("NEWFRIEND PROPS", props);
//         this.setState({
//           newFriend: {
//             ...this.state.newFriend,
//           },
//         });
//         this.props.history.push("/friends", res.data);
//       })
//       .catch((err) => {
//         console.log("Error NEWFRIEND", err);
//       });
//   };
