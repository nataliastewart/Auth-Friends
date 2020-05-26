import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//components
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import UpdateFriend from "./components/UpdateFriend";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Log Out</Link>
          </li>
          {/* <li>
            <Link to="/protected">Todo List</Link>
          </li> */}
        </ul>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/update-friend/:id" component={UpdateFriend} />
          <PrivateRoute path="/protected" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
