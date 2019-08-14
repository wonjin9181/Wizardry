
import React, { Component, Redirect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import "./login.css"
import API from "../../utils/API"
import { Link } from "react-router-dom";

class Login extends Component {

    state = {
        email: "",
        password: "",
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
            .then(function () {
                //redirct page
            })

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
                        <Link to="/createuser">

                            <Button className="btn" onClick={this.createAccount} variant="primary" type="submit">
                                Create an account
                           </Button>
                        </Link>
                    </Form>
                </Container>
            </div>
        );
    }
}


export default Login;