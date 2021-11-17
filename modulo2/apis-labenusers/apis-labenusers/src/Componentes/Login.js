import React from "react";

export default class Login extends React.Component {
  render() {
    console.log("análise", this.props);
    return (
      <div>
        <h1>Login</h1>
        <button onClick={this.props.onClickLogin}>Login</button>
      </div>
    );
  }
}
