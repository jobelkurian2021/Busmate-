import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import About from "./About";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/">
              <Home />
        </Route>

        <Route exact path="/Home">
              <Home />
        </Route>

        <Route exact path="/Index">
             <Home />
        </Route>

        <Route exact path="/Contact">
            <Contact />
        </Route>

        <Route exact path="/About">
            <About />
        </Route>

        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/register">
            <Register />
        </Route>


        <Route>
            <NotFound />
        </Route>

    </Switch>
  );
}