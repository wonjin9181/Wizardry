import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Figure
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./fight.css";


class Fight extends Component {

  state = {
    spell: false,
  }
  castSpell = () => {
    this.setState({ spell: true })
  }

  render() {
    return (
      <Container>
        <Row >
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
              <Figure.Caption className="justify-content-center">Player 1</Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Link to="/main"><Button onClick={this.castSpell} variant="primary" size="lg">
            Fight!
          </Button></Link>
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
