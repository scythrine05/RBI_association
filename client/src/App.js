import React from "react";
import "./css/app.css";

import {
    Route,Switch
} from 'react-router-dom';

import Home from "./Home";
import Newsletter from "./Newsletter";

export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/News" component={Newsletter} />
            </Switch>
        </div>
    );
}