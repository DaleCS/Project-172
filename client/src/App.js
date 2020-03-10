import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux Imports
import { Provider } from "react-redux";
import store from "./store";

// Component Imports
import Landing from "./components/landing/Landing";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          React is up and running!
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
