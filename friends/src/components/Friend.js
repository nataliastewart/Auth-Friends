import React from "react";

export default function Friend(props) {
  console.log("Friend -PROPS:", props);
  return (
    <div>
      <h4>{props.item.name}</h4>
      <p>Age: {props.item.age}</p>
      <p>Email:{props.item.email}</p>
    </div>
  );
}
