import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: "",
  isFetching: false,
};

const Login = (props) => {
  const [login, setLogin] = useState(initialState);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin({ ...login, isFetching: true });
    axiosWithAuth()
      .post("/api/login", login)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => console.log("LOGIN Error:", err));
  };

  return (
    <div>
      <img
        src="https://www.clipartmax.com/png/small/422-4223386_checklist-poll-task-to-do-list-clipboard-comments-task-to-do-icon.png"
        alt="Checklist Poll Task To Do List Clipboard Comments - Task To Do Icon @clipartmax.com"
      ></img>
      <h3>Login</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            username:
            <input
              type="text"
              name="username"
              value={login.username}
              onChange={handleChange}
            />
          </label>
          <label>
            password:
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button>Log In</button>
          {login.isFetching && "Please wait...logging you in"}
        </form>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
