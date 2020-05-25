import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//components
import Friend from "./Friend";

const FriendsList = () => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log("FriendsList -res.data:", res.data);
        setFriendList(res.data);
      })
      .catch((err) => console.log("ERROR FirendsList", err));
  }, []);

  const deleteFriend = (id) => {
    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then((res) => {
        console.log("DELETE-RES:", res);
        setFriendList(res.data);
        //  props.history.push("/protected")
      })
      .catch((err) => console.log("ERROR- DELETE:", err));
  };

  return (
    <div>
      <img
        src="http://pluspng.com/img-png/to-do-list-png-the-power-of-a-to-do-list-imodelafrica-1024.png"
        alt="To Do List PNG"
        alt="Checklist Poll Task To Do List Clipboard Comments - Task To Do Icon @clipartmax.com"
        className="todo-picture"
      />
      <h3>Friends List</h3>
      <div className="wrap-list">
        {friendList.map((item) => (
          <Friend item={item} key={item.id} deleteFriend={deleteFriend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
