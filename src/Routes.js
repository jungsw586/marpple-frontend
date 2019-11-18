import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "Pages/HomePage";
import LikePage from "Pages/MyAccount/LikePage";
import CartPage from "Pages/CartProcess/CartPage";
import MenuPage from "Pages/MenuPage";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/list/cart" component={CartPage} />
          <Route exact path="/list/like" component={LikePage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
