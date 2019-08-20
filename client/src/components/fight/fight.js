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
import { Link, Redirect } from "react-router-dom";
import "./fight.css";
// import axios from "axios";
import API from "../../utils/API";
import { timingSafeEqual } from "crypto";
import fighterImages from './fighterImages';

class Fight extends Component {
  state = {
    spell: false,
    monsterDescription: "",
    strength: "",
    monsterName: "",
    monsterImg: "",
    userStrength: 100,
    fight: false
  };

  castSpell = () => {
    this.setState({ spell: true });
  };

  componentDidMount = () => {
    let equ = document.location.search.indexOf("=");
    let id = parseInt(document.location.search.substr(equ + 1));
    let self = this;
    API.getOneMonster(id).then(function ({
      data: { monsterDescription, imageIndex, monsterName, strength }
    }) {
      // if imageIndex is an id (from database) that correlates to index value of the id in fightersImage array, then
      //  this.state.imageIndex = fighterImages[imageIndex]
      let { src } = fighterImages[imageIndex]; { }
      self.setState({ monsterDescription, monsterImg: src, monsterName, strength });
    });
  };

  fight = () => {

    let self = this
    let userStrength = this.state.userStrength
    let monsterStrength = this.state.strength
    let key = localStorage.getItem("key")



    if (userStrength > monsterStrength) {
      this.setState({ userStrength: userStrength + 20 }, function () {
        let data =[]
        data.push(this.state.userStrength)
        console.log(data)
        API.updateUser(data, key)
          .then(function (result) {
            self.setState({ fight: true })
            console.log(self.state.fight)
          })

      })
    }
    else{
      console.log(userStrength)
      alert("you are not strong enough")
    }
  }




  render() {

    if (this.state.fight === true) {
      return <Redirect to="/main" />
    }


    const { monsterImg } = this.state;
    // console.log('state.monsterImg', monsterImg);
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
              <Figure.Caption>{this.state.monsterName}</Figure.Caption>
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

          <Button onClick={this.fight} variant="primary" size="lg">
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
