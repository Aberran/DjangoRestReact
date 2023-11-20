import React from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const HomePage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
          <p>this is the home page</p>
        </Route>
        <Route path="/join" component={RoomJoinPage} />
        <Route path="/create" component={CreateRoomPage} />
      </Switch>
    </Router>
  );
}

export default HomePage;
