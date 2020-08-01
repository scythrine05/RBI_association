import React from "react";
import "./css/App.css";

import { Sugar } from "react-preloaders";

import { Route, Switch, BrowserRouter } from "react-router-dom";

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
          <Route exact path="/gallery" component={FullGallery} />
          <Route exact path="/news" component={Newsletter} />
          <Route exact path="/communication" component={Communication} />
          <Route exact path="/polls" component={Polls} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/new_password" component={NewPassword} />
          <Route exact path="/members" component={Members} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
