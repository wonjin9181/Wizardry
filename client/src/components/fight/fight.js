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
import backgroundImage from '../main-stats/backgroundImages'

class Fight extends Component {
  state = {
    spell: false,
    userStrength: "",
    monsterDescription: "",
    monsterStrength: "",
    monsterName: "",
    monsterImg: "",
    bgImage: backgroundImage[5],
    withdraw: false,
    fight: false
  };

  castSpell = () => {
    this.setState({ spell: true });
  };

  endGame = () => {
    this.setState({
      withdraw: true,
      userStrength: "100"
    });
    console.log(this.state);
  };

  componentDidMount = () => {
    let equ = document.location.search.indexOf("=");
    let id = parseInt(document.location.search.substr(equ + 1));
    let self = this;
    var key = localStorage.getItem("key");
    API.getOneMonster(id).then(function ({
      data: { monsterDescription, imageIndex, monsterName, strength }
    }) {
      // if imageIndex is an id (from database) that correlates to index value of the id in fightersImage array, then
      //  this.state.imageIndex = fighterImages[imageIndex]

      let { src } = fighterImages[imageIndex]; { }
      self.setState({ monsterDescription, monsterImg: src, monsterName, strength });

    });

    API.loadUser(key)
      .then(function (result) {
        self.setState({
          characterName: result.data.characterName,
          house: result.data.house,
          userStrength: result.data.strength
        })
      })
    //api call to get user
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

      <div style={{ hight: "100vh", backgroundImage: `url("${this.state.bgImage.src}")` }}>
        <Container>
          <Row >
            {/* <Col xs={{ span: 4, offset: 2 }}> */}
            <Col xs={{ span: 4, offset: 1 }}>
              <Figure>
                <Figure.Image id="fightContainer"
                  width={300}
                  height={300}
                  alt="175x175"
                  src={monsterImg}
                  className="fighters"
                />
                <Figure.Caption>Monster!</Figure.Caption>
              </Figure>
                </Col>

              <Col>
                <Link to="/main">
                  <Button id="fightBtn" onClick={this.castSpell} variant="primary" size="lg">
                    Fight!
            </Button>
                </Link>
              </Col>

            <Col className="justify-content-end"  xs={5}>
              <Figure>
                <Figure.Image id="fightContainer"
                  width={300}
                  height={300}
                  alt="175x175"
                  src="https://picsum.photos/id/660/300/300"
                  className="fighters"
                />
                <Figure.Caption className="justify-content-center">
                   <ul>
                  <li>Name: {this.state.characterName}</li>
                  <li>House: {this.state.house}</li>
                  <li>Strength: {this.state.userStrength}</li>
                </ul>
              </Figure.Caption>
              </Figure>
            </Col>
          </Row>
      </div >

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
