import React from "react"

class Public extends React.Component {
  render () {
    return (
      <React.Fragment>
        This is public page. {this.props.message}
      </React.Fragment>
    );
  }
}

export default Public
