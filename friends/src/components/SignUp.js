import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SignUp = (props) => {
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleChange = (e) => {
    setSignUpInfo({ ...signUpInfo, [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    setSignUpInfo(...signUpInfo);
    axiosWithAuth()
      .post("", signUpInfo)
      .then((res) => {
        //we dont really use the res
        props.history.push("/login");
      })
      .catch((err) => console.log("Error to SignUp:", err));
  };

  return (
    <div>
      <h1>Todo</h1>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Sign Up</button>
      </form>
      Already have an account? <Link to="/login">Log In</Link>
    </div>
  );
};

export default SignUp;
