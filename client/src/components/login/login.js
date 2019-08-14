import React, { Component } from "react";
import { Button, Form, Jumbotron, Container } from "react-bootstrap";
import "./login.css"

class Login extends Component {

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>Wizard Game Login</h1>

                        <p>
                            Cast spells to defeat monsters!
                </p>
                    </Container>
                    <Form className="loginForm">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address: </Form.Label>
                            <Form.Control className="input" type="email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control className="input" type="password" />
                        </Form.Group>
                        <Button className="btn" variant="primary" type="submit">
                            Play
          </Button>
                        <br></br>
                        <Button className="btn" variant="primary" type="submit">
                            Create an account
          </Button>
                    </Form>
                </Jumbotron>
            </div>
        );
    }
}
export default Login;