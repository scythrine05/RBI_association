import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { authContext } from "./contexts/AuthContext";
import Swal from "sweetalert2";

import "./css/App.css";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        auth === 0 ? (
          (Swal.fire("<h4>Logged out</h4>", "", "error", {
            className: "swal-title",
          }),
          (<Redirect to="/" />))
        ) : (
          <Component {...routeProps} />
        )
      }
    />
  );
  /*  Spreading routeProps to be able to access this routeProps in the component. */
};

export default PrivateRoute;
