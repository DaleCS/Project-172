// React imports
import React, { Component } from "react";

// Redux imports
import { connect } from "react-redux";
import { getLandingData } from "../../actions/landingActions";

class Landing extends Component {
  componentDidMount = () => {
    // Example of redux, reducer, and action calls
    this.props.getLandingData();
  };

  render() {
    return <div />;
  }
}

export default connect(
  null,
  { getLandingData }
)(Landing);
