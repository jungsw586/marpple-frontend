import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../src/Pages/HomePage";
import MenuPage from "Pages/MenuPage";
import CustomizingPage from "Pages/CustomizingPage";
import LikePage from "./Pages/MyAccount/LikePage";
import CartPage from "./Pages/CartProcess/CartPage";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/customize" component={CustomizingPage} />
          <Route exact path="/like_list" component={LikePage} />
          <Route exact path="/cart_list" component={CartPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
