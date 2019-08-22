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
import Code from './code'
import backgroundImage from '../main-stats/backgroundImages'
import fightAvatars from './fightAvatars'


class Fight extends Component {
  state = {
    characterStrength: "",
    monsterDescription: "",
    monsterStrength: "",
    monsterName: "",
    monsterImg: "",
    bgImage: backgroundImage[5],
    withdraw: false,
    won: false,
    loses: false,
    spellCode: "",
    code: "",
    characterImage: ""
  };

  withdraw = () => {
    this.setState({
      withdraw: true
    });
  };

  componentDidMount = () => {

    let equ = document.location.search.indexOf("=");
    let id = parseInt(document.location.search.substr(equ + 1));
    let self = this;
    var key = localStorage.getItem("key");
    API.getOneMonster(id).then(function ({
      data: { monsterDescription, imageIndex, monsterName, strength, id }
    }) {
      // if imageIndex is an id (from database) that correlates to index value of the id in fightersImage array, then
      //  this.state.imageIndex = fighterImages[imageIndex]

      let { src } = fighterImages[imageIndex]; { }
      self.setState({ monsterDescription, monsterImg: src, monsterName, monsterStrength: strength, monsterId: id }, function () {
        var monsterId = this.state.monsterId
        // console.log(Code(monsterId))
        var code = Code(monsterId)
        console.log(code)
        this.setState({ code })
      });

    });

    API.loadUser(key)
      .then(function (result) {
        console.log("RESULT", result)
        let { src } = fightAvatars[result.data.characterImage - 1];
        self.setState({
          characterName: result.data.characterName,
          house: result.data.house,
          characterStrength: result.data.strength,
          characterImage: src
        })
      })

    this.setState({
      lives: localStorage.getItem("lives")
    })
  };

  //renders the spell name
  handleCode = e => {
    let spellCode = this.state.spellCode + e.target.value
    this.setState({
      spellCode
    })
    console.log(this.state.spellCode)
  }


  //clears spell name
  clear = () => {
    this.setState({ spellCode: "" })
  }



  fight = () => {

    let self = this
    let characterStrength = parseInt(this.state.characterStrength)
    let monsterStrength = parseInt(this.state.monsterStrength)
    let key = localStorage.getItem("key")
    console.log(characterStrength)
    console.log(monsterStrength)


    if (characterStrength > monsterStrength && this.state.spellCode === this.state.code) {
      alert("Your spell is super effective \nYou have defeated " + self.state.monsterName)
      this.setState({ characterStrength: characterStrength + 20 }, function () {
        let data = []
        data.push(this.state.characterStrength)
        console.log(data)
        API.updateUser(data, key)
          .then(function (result) {
            self.setState({ won: true })

          })

      })
    }
    else if (characterStrength > monsterStrength) {
      alert("Your spell is not effective!!!!!")
      var lives = this.state.lives - 1
      this.setState({
        lives
      }, function () {
        localStorage.setItem("lives", this.state.lives)
      })

    }
    else {
      console.log(characterStrength)
      alert("You are not strong enough!!!!!")
      var lives = this.state.lives - 1
      this.setState({
        lives
      }, function () {
        localStorage.setItem("lives", this.state.lives)
      })
    }
  }

  youLose = () => {
    let characterStrength = parseInt(this.state.characterStrength)
    let key = localStorage.getItem("key")
    let self = this

    this.setState({ characterStrength: characterStrength - 20 }, function () {
      let data = []
      data.push(this.state.characterStrength)
      console.log(data)
      API.updateStrength(data, key)
        .then(function (result) {
         
        })
    })
    this.setState({ loses: true }, function () {
      alert("You have lost")
    })
  }


  render() {
    if (this.state.lives === 0) {
      this.youLose()
    }

    if (this.state.won === true) {
      return <Redirect to="/main" />
    }
    if (this.state.loses === true) {
      return <Redirect to="/main" />
    }

    const { monsterImg } = this.state;
    const { characterImage } = this.state;
    // console.log('state.monsterImg', monsterImg);
    return (
      <div style={{ hight: "100vh", backgroundSize: "cover", backgroundImage: `url("${this.state.bgImage.src}")` }}>
        <Container>
          <Link to="/main">
            <Button className="withdrawBtn" onClick={this.withdraw} variant="primary">
              Withdraw
           </Button>
          </Link>
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

              <Button id="fightBtn" onClick={this.fight} variant="primary" size="lg">
                Cast spell!
            </Button>

            </Col>

            <Col className="justify-content-end" xs={5}>
              <Figure>
                <Figure.Image id="fightContainer"
                  width={300}
                  height={300}
                  alt="175x175"
                  src={characterImage}
                  className="fighters"
                />
                <Figure.Caption className="justify-content-center">
                  <ul>
                    <li>Name: {this.state.characterName}</li>
                    <li>House: {this.state.house}</li>
                    <li>Strength: {this.state.characterStrength}</li>
                    <li>Lives: {this.state.lives}</li>
                  </ul>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <p>{this.state.spellCode}</p>



          <Row className="justify-content-md-center">
            <Col xs={2}>
              <Button
                id="letterBtn"
                value="kalham"
                onClick={this.handleCode}
              >kalham</Button>
            </Col>

            <Col xs={2}>
              <Button
                id="letterBtn"
                value="babadiboo"
                onClick={this.handleCode}
              >babadiboo</Button>
            </Col>

            <Col xs={2}>
              <Button
                id="letterBtn"
                value="wonwon"
                onClick={this.handleCode}
              >wonwon</Button>
            </Col>

            <Col xs={2}>
              <Button
                id="letterBtn"
                value="liditanheig"
                onClick={this.handleCode}
              >liditanheig</Button>
            </Col>

            <Col xs={2}>
              <Button
                id="letterBtn"
                onClick={this.clear}
              >Clear</Button>
            </Col>
          </Row>

        </Container>
      </div >
    );
  }
}

export default Fight;