import React, { useContext } from "react";

import { Sugar } from "react-preloaders";

import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { authContext } from "./contexts/AuthContext";

import NewAccount from "./NewAccount";
import Home from "./Home";
import FullGallery from "./FullGallery";
import Newsletter from "./Newsletter";
import Communication from "./Communcation";
import Polls from "./Polls";
import Suggestion from "./Suggestion";
import Profile from "./Profile";
import Members from "./Members";
import FullTeam from "./FullTeam";
import NewPassword from "./NewPassword";

import "./css/App.css";

export default function App() {
  const { auth } = useContext(authContext);

  return (
    <div>
      <Sugar color="#3498db" animation="slide-right" time={2000} />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/signup"
            component={auth === 0 ? NewAccount : Home}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/fullteam" component={FullTeam} />
          <PrivateRoute exact path="/gallery" component={FullGallery} />
          <PrivateRoute exact path="/news" component={Newsletter} />
          <PrivateRoute exact path="/communication" component={Communication} />
          <PrivateRoute exact path="/polls" component={Polls} />
          <PrivateRoute exact path="/suggestion" component={Suggestion} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute
            exact
            path="/profile/new_password"
            component={NewPassword}
          />
          <PrivateRoute exact path="/members" component={Members} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
