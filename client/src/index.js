import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import AuthProvider from "./contexts/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
