import React from "react";
import { Router, Link } from 'react-router-dom';

class Private extends React.Component {
  render () {
    return (
      <React.Fragment>
        You have logged in. The secret is in the greeting.
        <br />
        <Link to="/hello">Hello</Link>
      </React.Fragment>
    );
  }
}

export default Private
