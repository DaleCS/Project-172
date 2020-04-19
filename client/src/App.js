// React imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Bootstrap/CSS imports
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
<<<<<<< HEAD
=======

// Redux Imports
import { Provider } from "react-redux";
import store from "./store";
>>>>>>> Began work on frontend of user authentication

// Component Imports
import PrivateRoute from "./components/routing/PrivateRoute";
import Landing from "./components/landing/Landing";
import Registration from "./components/authentication/Registration";
import Login from "./components/authentication/Login";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={[styles.navbar, "mr-auto"].join(" ")}>
              <Navbar.Brand href="">TODO</Navbar.Brand>
              <Nav.Link href="/dashboard">Home</Nav.Link>
            </Nav>
            <Form inline className={styles.item}>
              <Button variant="outline-success">
                <Link to="/login">Sign in</Link>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
