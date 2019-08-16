import React, { Component } from "react";
import "./main_stats.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class MainStats extends Component {
  state = {
    fight: {
      monster1: false,
      monster2: false,
      monster3: false,
      monster4: false
    }
  };
  fightMonster = () => {
    this.setState({ fightMonster: true });
  };

  render() {
    return (
      <div>
        <Container id="mainContainer">
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Card id="mainCard" style={{ width: "13rem" }}>
                <img
                  id="character"
                  src={"https://picsum.photos/id/122/200/200"}
                />
              </Card>
            </Col>

            <Col md="auto">
              <Card id="mainCard" style={{ width: "18rem" }}>
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
          <br />

          <br />

          <Row className="justify-content-xl-center">
            <Col xs={2}>
              <Link to="/fight?monster=1">
                <Button variant="primary" onClick={this.fightMonster}>
                  Stage 1
                </Button>
              </Link>
            </Col>
            <Col xs={2}>
              <Link to="/fight?monster=2">
                <Button onClick={this.fightMonster}>Stage 2 </Button>
              </Link>
            </Col>
            <Col xs={2}>
              <Link id="3" to="/fight?monster=3">
                <Button onClick={this.fightMonster}>Stage 3</Button>
              </Link>
            </Col>
            <Col xs={2}>
              <Link to="/fight?monster=4">
                <Button onClick={this.fightMonster}>Stage 4</Button>
              </Link>
            </Col>
          </Row>
          <br />

          <Row className="justify-content-md-center">
            <Card id="mainCard" style={{ width: "60rem" }}>
              <Col>
                <h3 id="userInfo">House Members</h3>
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
