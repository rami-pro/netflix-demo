import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({
  user,
  loggedInPath,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return <Component {...rest} />;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return <Component user={user} {...rest} />;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
