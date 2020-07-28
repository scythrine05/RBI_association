import React from "react";
import "./css/App.css";

import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Newsletter from "./Newsletter";
import Polls from "./Polls";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={Newsletter} />
        <Route exact path="/polls" component={Polls} />
      </Switch>
    </div>
  );
}
