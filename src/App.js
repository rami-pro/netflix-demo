import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { Browse, Home, Signin, Signup } from "./pages";
import { SIGN_IN, SIGN_UP, BROWSE, HOME } from "./constanst/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

function App() {
  const { user } = useAuthListener();
  return (
    <BrowserRouter>
      <Switch>
        <IsUserRedirect
          user={user}
          exact
          path={SIGN_IN}
          component={Signin}
          loggedInPath={BROWSE}
        />
        <IsUserRedirect
          user={user}
          exact
          path={SIGN_UP}
          component={Signup}
          loggedInPath={BROWSE}
        />
        <IsUserRedirect
          user={user}
          exact
          path={HOME}
          component={Home}
          loggedInPath={BROWSE}
        />
        <ProtectedRoute user={user} exact path={BROWSE} component={Browse} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
