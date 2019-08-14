import React, { Component, Redirect } from "react";
import { Button } from "react-bootstrap";
import "./create_user.css"


class CreateUser extends Component {

  state = {
    user: false,
  };
  makeUser = () => {
    this.setState({ user: true })
  };

  render() {
    
    if (this.state.user === true) {
      return <Redirect to='/' />
    };

    return (
      <div>
        <Button className="btn" onClick={this.makeUser} variant="primary" type="submit">
          Create an account
          </Button>
      </div>
    );
  }
}
export default CreateUser;