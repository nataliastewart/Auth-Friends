import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    //make a Post request and send the credentials object to the API
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((res) => {
        console.log("RES.data.payload - from Login.js", res.data.payload);
        window.localStorage.setItem("token", JSON.stringify(res.data.payload));

        //navigate the user when logged to the page "/protected"
        this.props.history.push("/protected");
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label>
            username:
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            password:
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </label>
          <button>Log in</button>
        </form>
      </div>
    );
  }
}
export default Login;
