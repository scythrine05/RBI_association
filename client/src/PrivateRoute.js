import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { authContext } from "./contexts/AuthContext";

import "./css/App.css";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        auth === 0 ? <Redirect to="/" /> : <Component {...routeProps} />
      }
    />
  );
  /*  Spreading routeProps to be able to access this routeProps in the component. */
};

export default PrivateRoute;
