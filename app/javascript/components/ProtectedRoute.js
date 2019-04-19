import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// export const ProtectedRoute = ({ component: Component, ...rest }) => (
//   <Route
//     { ...rest }
//     render = {props =>
//       rest.isAuthenticated
//         ? <Component {...props} />
//         : <Redirect
//             to={{
//               pathname: '/',
//               state: { from: props.location },
//             }}
//           />
//     }
//   />
// );

class ProtectedRoute extends React.Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.setErrorMsg();
    }
  }

  render () {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        { ...rest }
        render = {props =>
          rest.isAuthenticated
            ? <Component {...props} />
            : <Redirect
                to={{
                  pathname: '/',
                  state: { from: props.location },
                }}
              />
        }
      />
    );
  }
}

export default ProtectedRoute;
