import React, { Component } from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./main_stats.css"

class MainStats extends Component {

    render() {
        return (
            <div>

                <Container id="mainContainer">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Card id="mainCard" style={{ width: '13rem' }}>
                            <img src ={"https://picsum.photos/id/122/200/200"}/>
                            </Card>
                        </Col>

                        <Col md="auto">
                            <Card id="mainCard" style={{ width: '18rem' }}>
                                <h3 id="userInfo">User Info</h3>
                                <ul>
                                    <li>Name: </li>
                                    <li>House:</li>
                                    <li>Strength: </li>
                                    <li>Spells: </li>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                    <br></br>
                    <Row className="justify-content-md-center">
                        <Col md={2}>
                            <Button variant="primary" type="suBmit">Stage 1</Button>
                        </Col>
                        <Col md={2}>
                            <Button variant="primary" type="submit">Stage 2</Button>
                        </Col>
                        <Col md={2}>
                            <Button variant="primary" type="submit">Stage 3</Button>
                        </Col>
                        <Col md={2}>
                            <Button variant="primary" type="submit">Stage 4</Button>
                        </Col>
                    </Row>
                    <br></br>

                    <Row className="justify-content-md-center">
                            <Card id="mainCard" style={{ width: '60rem' }}>
                            <Col>
                                <h3 id= "userInfo">House Members</h3>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                </ul>
                                </Col>
                            </Card>
                    </Row>

                </Container>

            </div>
        );
    }
}
export default MainStats;