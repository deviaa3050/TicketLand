import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import React, { useState } from "react";
import Landing from "./pages/landing/landing";
import Ticket from "./pages/ticket/ticket";
import Payment from "./pages/payment/payment";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/ticket">
            <Ticket />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
