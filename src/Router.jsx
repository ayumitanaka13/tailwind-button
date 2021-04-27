import React from "react";
import { Route, Switch } from "react-router";

import Auth from "./Auth";
import { Home, Reset, Signin, Signup, Create } from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signin/reset" component={Reset} />
      {/* <Route exact path="/create" component={Create} /> */}
      <Auth>
        <Route exact path="/create" component={Create} />
      </Auth>
    </Switch>
  );
};

export default Router;
