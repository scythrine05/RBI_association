import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import AuthProvider from "./contexts/AuthContext";

ReactDOM.render(
  <React.Fragment>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.Fragment>,
  document.getElementById("root")
);

serviceWorker.unregister();
