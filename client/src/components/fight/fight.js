import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Figure,
  Image,
  ImageProps
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./fight.css";
import axios from "axios";
import API from "../../utils/API";
import { timingSafeEqual } from "crypto";
import fighterImages from './fighterImages';

class Fight extends Component {
  state = {
    spell: false,
    monsterDescription: "",
    strength: "",
    monsterName: "",
    monsterImg: ""
  };
  castSpell = () => {
    this.setState({ spell: true });
  };

  componentDidMount = () => {
    let equ = document.location.search.indexOf("=");
    let id = parseInt(document.location.search.substr(equ + 1));
    let self = this;
    API.getOneMonster(id).then(function ({
      data: { monsterDescription, imageIndex }
    }) {
      // if imageIndex is an id (from database) that correlates to index value of the id in fightersImage array, then
      //  this.state.imageIndex = fighterImages[imageIndex]
      let { src } = fighterImages[imageIndex]; { }
      self.setState({ monsterDescription, monsterImg: src });
    });
  };

  render() {
    const { monsterImg } = this.state;
    console.log('state.monsterImg', monsterImg);
    return (
      <Container>
        <Row>
          <Col xs={{ span: 4, offset: 2 }}>
            <Figure>
              <Figure.Image
                width={300}
                height={300}
                alt="175x175"
                src={monsterImg}
                className="fighters"
              />
              <Figure.Caption>Monster!</Figure.Caption>
            </Figure>
          </Col>
          <Col xs={4} className="justify-content-end">
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
