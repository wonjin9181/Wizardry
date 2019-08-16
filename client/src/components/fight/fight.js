import React, { Component } from "react";
import { Button, Container, Row, Col, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./fight.css";
import axios from "axios";
import API from "../../utils/API";
// import monsterData from "../../../../script/monsters.json"

class Fight extends Component {
  state = {
    spell: false,
    monsterType: "",
    monsterStrength: "",
    monsterName: "",
    monsterImage: ""
  };
  castSpell = () => {
    this.setState({ spell: true });
  };

  componentDidMount = () => {
    let equ = document.location.search.indexOf("=");
    let id = parseInt(document.location.search.substr(equ + 1));
    let self = this;
    console.log(id);
    API.getOneMonster(id).then(function(res) {
      console.log("response", res);
      self.setState({
        monsterType: res.data[0].monsterDescription
      });
      console.log("STATE", self.state.monsterType);
    });
  };

  //api call
  //.then(data)
  //setstate of monster
  render() {
    // if (monsterElement === "Fire Monster") {
    //   console.log("did it work?")
    // }
    return (
      <Container>
        <Row>
          <Col xs={{ span: 4, offset: 2 }}>
            <Figure>
              <Figure.Image
                width={300}
                height={300}
                alt="175x175"
                src="https://picsum.photos/id/660/300/300"
                className="fighters"
              />
              <Figure.Caption>Monster!</Figure.Caption>
            </Figure>
          </Col>
          <Col xs={4} class="justify-content-end">
            <Figure>
              <Figure.Image
                width={300}
                height={300}
                alt="175x175"
                src="https://picsum.photos/id/660/300/300"
                className="fighters"
              />
              <Figure.Caption className="justify-content-center">
                Player 1
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Link to="/main">
            <Button onClick={this.castSpell} variant="primary" size="lg">
              Fight!
            </Button>
          </Link>
        </Row>
      </Container>
    );
  }
}
export default Fight;

/* <Row className="justify-content-md-center">
<Col xs lg="4">
  <Image className="fighters" src="https://picsum.photos/id/660/200/200" />
</Col>
<Col xs lg="4">
<Image className="fighters" src="https://picsum.photos/id/660/200/200" />
</Col>
</Row> */
