
import React, { Component } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import "./create_user.css";
import API from "../../utils/API"
import { Redirect } from 'react-router-dom'

class CreateUser extends Component {
  state = {
    username: "",
    house: "",
    email: "",
    password: "",
    madeUser: false,
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    let self = this;
    event.preventDefault();
    console.log(this.state)

    API.createUser(this.state)

      .then(function (result) {
        console.log(result)
        if (!result.data) {
          alert("Email already exists!")
         
        } else {
          self.setState({
            madeUser: true
          })
        }
      });
  };

  render() {

    if (this.state.madeUser === true) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <Container>
          <h1>Wizard game</h1>

          <aside id="createuser">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    placeholder="Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={2}>
                  House
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    inline
                    type="radio"
                    value="fire"
                    onClick={this.handleChange}
                    label="Fire"
                    name="house"
                    id="formHorizontalRadios1"
                  />

                  <Form.Check
                    inline
                    type="radio"
                    value="water"
                    onClick={this.handleChange}
                    label="Water"
                    name="house"
                    id="formHorizontalRadios2"
                  />


                  <Form.Check
                    inline
                    type="radio"
                    value="earth"
                    onClick={this.handleChange}
                    label="Earth"
                    name="house"
                    id="formHorizontalRadios3"
                  />


                  <Form.Check
                    inline
                    type="radio"
                    value="air"
                    onClick={this.handleChange}
                    label="Air"
                    name="house"
                    id="formHorizontalRadios4"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password
              </Form.Label>
                <Col>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>

              <Button
                id="createUserBtn"
                variant="primary"
                type="submit"
                disabled={!this.validateForm()}>

                Create account </Button>


            </Form>
          </aside>


        </Container>


      </div>
    )

  }

}


export default CreateUser;