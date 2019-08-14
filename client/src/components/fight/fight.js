import React, { Component } from "react";
import {
  Button,
  Form,
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Figure
} from "react-bootstrap";
import "./fight.css";
console.log(window.innerWidth);
console.log(window.innerHeight);
class Fight extends Component {
  render() {
    return (
      <Container>
        <Row >
          <Col xs={{span: 4, offset: 2}}>
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
          <Button variant="primary" size="lg">
            Fight!
          </Button>
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
