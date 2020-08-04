import React from "react";
import "./css/App.css";

import { Sugar } from "react-preloaders";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import NewAccount from "./NewAccount";
import Home from "./Home";
import FullGallery from "./FullGallery";
import Newsletter from "./Newsletter";
import Communication from "./Communcation";
import Polls from "./Polls";
import Profile from "./Profile";
import Members from "./Members";
import NewPassword from "./NewPassword";

export default function App() {
  return (
    <div>
      <Sugar color="#3498db" animation="slide" time={500} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={NewAccount} />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/gallery" component={FullGallery} />
          <PrivateRoute exact path="/news" component={Newsletter} />
          <PrivateRoute exact path="/communication" component={Communication} />
          <PrivateRoute exact path="/polls" component={Polls} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/profile/new_password" component={NewPassword} />
          <PrivateRoute exact path="/members" component={Members} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
