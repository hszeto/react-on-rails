import React from "react";
import { Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

import AuthButton from './AuthButton';
import HelloWorld from './HelloWorld';
import Private from './Private';
import Public from './Public';
import ProtectedRoute from './ProtectedRoute';

const routeHistory = createBrowserHistory();

class App extends React.Component {
  state = {
    isAuthenticated: false,
    errorMsg: ''
  }

  toggleAuth = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated
    }, () => this.redirect() )
  }

  redirect = () => {
    this.state.isAuthenticated
      ? routeHistory.push('/private')
      : routeHistory.push('/')
  }

  setErrorMsg = () => {
    this.setState({
      errorMsg: 'Login first'
    }, () => {
      setTimeout(()=>{
        this.setState({
          errorMsg: ''
        })
      }, 2000)
    })
  }

  render () {
    return (
      <React.Fragment>
        <div style={{textAlign:'center'}}>
        <h2>React-Rails Template with React-Router</h2>
        <hr />
        <Router history={routeHistory} >
          <div>
            <nav>
              <Link to="/">Home</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/public">Public</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/private">Private</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <AuthButton isAuthenticated={this.state.isAuthenticated} toggleAuth={this.toggleAuth}/>
            </nav>
          </div>
          <br />

          <Switch>
            <Route path='/public'
              component={ ()=><Public message='No secret here.'/> }
            />

            <ProtectedRoute
              exact path="/private"
              component={ Private }
              isAuthenticated={this.state.isAuthenticated}
              setErrorMsg={this.setErrorMsg}
            />
            <ProtectedRoute
              exact path="/hello"
              component={ ()=><HelloWorld greeting='YO YO YO!'/> }
              isAuthenticated={this.state.isAuthenticated}
              setErrorMsg={this.setErrorMsg}
            />
          </Switch>
        </Router>

        { this.state.errorMsg }
        </div>
      </React.Fragment>
    );
  }
}

export default App
