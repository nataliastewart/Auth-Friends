import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  name: "",
  age: "",
  email: "",
};

export default function UpdateFriend() {
  const { push } = useHistory();
  const [item, setItem] = useState(initialState);
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/friends/${id}`)
      .then((res) => {
        // console.log("Update- RES:", res);
        setItem(res.data);
      })
      .catch((err) => console.log("Update-get-Error:", err));
  }, [id]);

  const handleChange = (ev) => {
    ev.persist();
    setItem({
      ...item,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //make a PUT request to edit the item
    axiosWithAuth()
      .put(`/api/friends/${id}`, item)
      .then((res) => {
        // console.log("handleSubmit-RES:", res);
        setItem(res.data);
        push(`/protected`);
      })
      .catch((err) => console.log("HandleSubmit error:", err));
  };

  return (
    <div className="wrap-upform">
      <form onSubmit={handleSubmit} className="updateForm">
        <h2>Update your Todo</h2>
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
        {/* <label htmlFor="age" className="label">
          Age:
        </label>
        <input
          type="text"
          name="age"
          value={item.age}
          onChange={handleChange}
        />
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          text="type"
          name="email"
          value={item.email}
          onChange={handleChange}
        /> */}
        <button className="sbmt-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
