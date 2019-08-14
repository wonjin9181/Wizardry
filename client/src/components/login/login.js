import React, { Component, Redirect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import "./login.css"


class Login extends Component {

    state = {
        createUser: false,
    };
    createAccount = () => {
        this.setState({ createUser: true })
    };


    state = {
        play: false,
    }

    playGame = () => {
        this.setState({ play: true })
    }


    render() {

        if (this.state.createUser === true) {
            return <Redirect to='/createuser' />
        };

        if (this.state.play === true) {
            return <Redirect to='/mainstats' />
        };

        return (
            <div>
                <Container>
                    <h1>Wizard Game Login</h1>

                    <p>
                        Cast spells to defeat monsters!
                </p>

                    <Form className="loginForm">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address: </Form.Label>
                            <Form.Control className="input" type="email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control className="input" type="password" />
                        </Form.Group>
                        <Button className="btn" onClick={this.playGame} variant="primary" type="submit">
                            Play
          </Button>
                        <br></br>
                        <Button className="btn" onClick={this.createAccount} variant="primary" type="submit">
                            Create an account
          </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}


export default Login;