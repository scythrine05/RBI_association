import React from "react";
import "./css/app.css";

import {
    Route
  } from 'react-router-dom';

import Home from "./Home";
// import Newsletter from "./Newsletter";

export default function App(){
    return(
    <div>
        <Route exact path="/" component={Home}/>
        
    </div>
    );
}