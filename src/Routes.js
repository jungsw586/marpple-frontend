import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../src/Pages/HomePage";
import MenuPage from "Pages/MenuPage";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/menu" component={MenuPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
