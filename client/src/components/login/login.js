
import React, { Component, Redirect } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "./login.css"
import API from "../../utils/API"
import { Link } from "react-router-dom";

class Login extends Component {

    state = {
        play: false,
    }
    playGame = () => {
        this.setState({ play: true })
    }

    state = {
        email: "",
        password: "",
        createUser: false,

    };
    createAccount = () => {
        this.setState({ createUser: true })
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
            .then(function () {
                //redirct page


            })

    }




    render() {
        if (this.state.play === true) {
            return <Redirect to='/main' />
        };
        if (this.state.createUser === true) {
            return <Redirect to='/createuser' />
        };



        return (
            <div>
                <Container>
                    <h1>Wizard Game Login</h1>

                    <p>
                        Cast spells to defeat monsters!
                </p>
                    <aside id= "loginaside">
                        <Form className="loginForm">
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Email
                        </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                         </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>

                            <Button className="btn" onClick={this.playGame} variant="primary" type="submit">
                                Play
                             </Button>
                            <Link to="/createuser">
                                <Button className="btn" onClick={this.createAccount} variant="primary" type="submit" >
                                    Create an account
                           </Button>
                            </Link>
                        </Form>
                    </aside>
                </Container>
            </div>
        );
    }
}


export default Login;