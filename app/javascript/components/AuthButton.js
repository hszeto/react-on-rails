import React from "react";

class AuthButton extends React.Component {
  loginButton = () =>
    <button onClick={this.props.toggleAuth}>Login</button>

  logoutButton = () =>
    <button onClick={this.props.toggleAuth}>Logout</button>

  render () {
    return (
      <React.Fragment>
        {
          this.props.isAuthenticated ?
            this.logoutButton() : 
            this.loginButton()
        }
      </React.Fragment>
    );
  }
}

export default AuthButton
