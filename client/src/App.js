import React from "react";
import "./css/App.css";

import { Sugar } from "react-preloaders";

import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Newsletter from "./Newsletter";
import Polls from "./Polls";
import Profile from "./Profile";

export default function App() {
  return (
    <div>
      <Sugar color="gold" animation="slide" time={3500} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={Newsletter} />
        <Route exact path="/polls" component={Polls} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}
