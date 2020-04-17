// React imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Bootstrap/CSS imports
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Redux Imports
import { Provider } from "react-redux";
import store from "./store";

// Component Imports
import Landing from "./components/landing/Landing";
import Registration from "./components/authentication/Registration";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar bg = "dark" expand = "lg" variant = "dark">
          {/* <Container> */}
            <Navbar.Toggle aria-controls = "basic-navbar-nav" />
            <Navbar.Collapse id = "basic-navbar-nav">
              <Nav className = {[styles.navbar, "mr-auto"].join(' ')}>
                <Navbar.Brand href = "#home">TODO</Navbar.Brand>
                <Nav.Link href = "#home">Home</Nav.Link>
                <Nav.Link href = "#link">Link</Nav.Link>
              </Nav>
              <Form inline className = {styles.item}>
                <Button variant = "outline-success">Login</Button>
              </Form>
            </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
        <Router>
          <Switch>
            <Route exact path = "/" component={Landing} />
            <Route exact path = "/register" component={Registration} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
