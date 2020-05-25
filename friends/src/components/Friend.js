import React from "react";

export default function Friend(props) {
  // console.log("Friend -PROPS:", props);
  return (
    <div className="friend-wrap">
      <h4>{props.item.name}</h4>
      {/* <p>Age: {props.item.age}</p>
      <p>Email:{props.item.email}</p> */}
      <button
        className="delete-btn"
        onClick={() => props.deleteFriend(props.item.id)}
      >
        Delete
      </button>
    </div>
  );
}
