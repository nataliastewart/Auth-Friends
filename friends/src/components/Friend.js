import React from "react";
import { useHistory } from "react-router-dom";

export default function Friend(props) {
  // console.log("Friend -PROPS:", props);
  const { push } = useHistory();
  return (
    <div className="friend-wrap">
      <h4>{props.item.name}</h4>
      {/* <p>Age: {props.item.age}</p>
      <p>Email:{props.item.email}</p> */}
      <button
        className="edit-btn"
        onClick={() => push(`/update-friend/${props.item.id}`)}
      >
        Edit
      </button>
      <button
        className="delete-btn"
        onClick={() => props.deleteFriend(props.item.id)}
      >
        Delete
      </button>
    </div>
  );
}
