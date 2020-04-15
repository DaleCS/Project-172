import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Registration} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
