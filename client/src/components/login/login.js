import React, { Component } from "react";
import waterfall from "./App.css"
import { Button, Form, Jumbotron, Container } from "react-bootstrap";
import waterfall from "./login.css"

class Login extends Component {

render(){
    return (
        <div id="waterfall">
            <Jumbotron fluid>
              <Container>
                <h1>Wizard Game Login</h1>
                
                <p>
                  Cast spells to defeat monsters!
                </p>
              </Container>
            
          <img src={waterfall} alt="Waterfall" />;
  
        <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button id="playBtn" variant="primary" type="submit">
              Play
          </Button>
            <br></br>
            <Button id="createUserBtn" variant="primary" type="submit">
              Create an account
          </Button>
          </Form>
          </Jumbotron>
        </div>
    );
  }
}
export default Login;