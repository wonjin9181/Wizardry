import React, { Component } from "react";
import { Button, Form, Jumbotron, Container } from "react-bootstrap";
import "./login.css"
import API from "../../utils/API"

class Login extends Component {

  
    state = {
      email: "",
      password: ""
    };


  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    API.loginUser(this.state)
    .then(function(){
      //redirct page
    })

  }




render(){
    return (
        <div>
            <Jumbotron fluid>
              <Container>
                <h1>Wizard Game Login</h1>
                
                <p>
                  Cast spells to defeat monsters!
                </p>
              </Container>

  
        <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Enter email" 
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Password" 
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              />
            </Form.Group>
            <Button id="playBtn" variant="primary" type="submit">
              Play
          </Button>
            <br></br>
            //Link to="/createUser"
            <Button id="createUserBtn" variant="primary">
              Create an account
          </Button>
          </Form>
          </Jumbotron>
        </div>
    );
  }
}
export default Login;