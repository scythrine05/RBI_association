import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { authContext } from "./contexts/AuthContext";
import Swal from "sweetalert2";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        auth === 0 ? (
          (Swal.fire("You are logged out", "", "error"), (<Redirect to="/" />))
        ) : (
          <Component {...routeProps} />
        )
      }
    />
  );
  /*  Spreading routeProps to be able to access this routeProps in the component. */
};

export default PrivateRoute;
