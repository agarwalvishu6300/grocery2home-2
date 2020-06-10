import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/page" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/cart" exact component={Cart} />
       
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
