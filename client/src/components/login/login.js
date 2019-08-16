
import React, { Component } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "./login.css"
import { Link, Redirect } from "react-router-dom";


function Login(props) {

    if (props.play === true) {
        return <Redirect to="/main" />
    }

    return (
        <div>
            <Container>
                <h1>Wizard Game Login</h1>

                <p>
                    Cast spells to defeat monsters!
                </p>
                <aside id="loginaside">
                    <Form className="loginForm" onSubmit={props.handleSubmit}>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={props.email}
                                    onChange={props.handleChange}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Password
                         </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    autoFocus
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={props.password}
                                    onChange={props.handleChange}
                                />
                            </Col>
                        </Form.Group>

                        <Button
                            className="btn"
                            variant="primary"
                            type="submit"
                            disabled={!props.validateForm()}>
                            Play
                             </Button>

                        <Link to="/createuser">
                            <Button className="btn" variant="primary">
                                Create an account
                           </Button>
                        </Link>
                    </Form>
                </aside>
            </Container>
        </div>
    );
}



export default Login;