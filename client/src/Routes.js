import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import Home from "./core/page";
import Signin from "./signin/Signin"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
      
     <Route path="/signin/Signin" exact component={Signin} />


      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
