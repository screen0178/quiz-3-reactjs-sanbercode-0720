import React from "react";
import { Switch, Route } from "react-router";
import Home from "./component/home";
import About from "./component/about";
import MovieEdit from "./component/movieEdit";
import Login from './component/login/login'


const Routes = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/movielist">
        <MovieEdit />
      </Route>
    </Switch>
  );
};

export default Routes;