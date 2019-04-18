import React from "react";
import { Route } from 'react-router-dom';

class Private extends React.Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.setErrorMsg();
      this.props.history.push('/');
    }
  }

  render () {
    return (
      <React.Fragment>
        You have logged in. The secret is, there is no secret.
      </React.Fragment>
    );
  }
}

export default Private
