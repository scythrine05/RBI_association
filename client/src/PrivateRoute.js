import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from './contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        (auth.data==null) ? <Redirect to="/" /> : <Component {...routeProps} />
      )}
    />

  );
/*  Spreading routeProps to be able to access this routeProps in the component. */
};

export default PrivateRoute;