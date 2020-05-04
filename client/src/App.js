// React imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Component Imports
import PrivateRoute from "./components/routing/PrivateRoute";
import Landing from "./components/landing/Landing";
import Registration from "./components/authentication/Registration";
import Login from "./components/authentication/Login";
import Dashboard from "./components/dashboard/Dashboard";

import Navbar from "./components/layout/Navbar";
import { isLoggedIn, logOut } from "./auth";

const App = () => {
  const [isLoggedInState, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  const handleLogOut = (event) => {
    event.preventDefault();
    logOut();
    setLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedInState={isLoggedInState} handleLogOut={handleLogOut} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Registration} />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} handleLogIn={setLoggedIn} />}
        />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
