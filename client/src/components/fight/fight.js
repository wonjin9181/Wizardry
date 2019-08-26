import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Figure,
  Card
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "./fight.css";
// import axios from "axios";
import API from "../../utils/API";
// import { timingSafeEqual } from "crypto";
import fighterImages from './fighterImages';
import Spells from './spells';
import backgroundImage from '../main-stats/backgroundImages';
import fightAvatars from './fightAvatars';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

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
    spellStrength: "",
    spells: [
      {
        spell: [{
          name: "spell1",
          power: 100
        },
        {
          name: "spell2",
          power: 180
        },
        {
          name: "spell3",
          power: 220
        },
        {
          name: "spell4",
          power: 410
        }]
      }
    ],
    house: "",
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

      let { src } = fighterImages[imageIndex];
      self.setState({
        monsterDescription, monsterImg: src, monsterName,
        monsterStrength: strength,
        monsterId: id
      }, function () {

      });

    });

    API.loadUser(key)
      .then(function (result) {
        let { src } = fightAvatars[result.data.characterImage - 1];

        self.setState({
          characterName: result.data.characterName,
          house: result.data.house,
          characterStrength: result.data.strength,
          characterImage: src
        }, function () {
          console.log(this.state.house);
          var spells = Spells(this.state.house)
          console.log(spells)
          self.setState({
            spells
          }, function () {
            console.log(self.state.spells[0].spell[0].name)
          });

        });

      });

    this.setState({
      lives: localStorage.getItem("lives")
    })
  };

  //renders the spell name
  handleCode = e => {
    let spellCode = e.target.name
    let spellStrength = e.target.value

    this.setState({
      spellCode: spellCode,
      spellStrength: spellStrength
    })

  }


  //clears spell name
  clear = () => {
    this.setState({ spellCode: "" })
  }



  fight = () => {

    let self = this
    let characterStrength = parseInt(this.state.characterStrength)
    let monsterStrength = parseInt(this.state.monsterStrength)
    let spellStrength = parseInt(this.state.spellStrength)
    let key = localStorage.getItem("key")
    console.log(characterStrength)
    console.log(monsterStrength)
    console.log(spellStrength);


    if ((spellStrength + characterStrength) > monsterStrength) {
      MySwal.fire("Your spell is super effective \nYou have defeated " + self.state.monsterName)
      this.setState({
        characterStrength: characterStrength + 40
      }, function () {
        let data = []
        data.push(this.state.characterStrength)
        console.log(data)
        API.updateUser(data, key)
          .then(function (result) {
            self.setState({
              won: true
            })
          })
      })
    }

    else {
      console.log(characterStrength)
      MySwal.fire("You are not strong enough!!!!!")

      let lives = this.state.lives - 1

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

    this.setState({ characterStrength: characterStrength - 20 }, function () {
      let data = []
      data.push(this.state.characterStrength)
      console.log(data)
      API.updateStrength(data, key)
        .then(function (result) {
        })
    })
    this.setState({ loses: true }, function () {
      MySwal.fire("You have lost")
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
    // const { spells } = this.state;
    // console.log('state.monsterImg', monsterImg);
    return (
      <div style={{ hight: "100vh", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url("${this.state.bgImage.src}")` }}>
        <Container>
          <Link to="/main">
            <Button className="withdrawBtn" onClick={this.withdraw} variant="primary">
              Withdraw
           </Button>
          </Link>

          <Row>
            <Col lg={3} md={2} ></Col>

            <Col lg={6} md={4} xs={6} className="justify-content">
              <Figure>
                <Figure.Image id="fightMonster"
                  width={200}
                  height={200}
                  alt="175x175"
                  src={monsterImg}
                  className="text-center"
                />
              </Figure>
            </Col >

            <Col lg={3} md={4} xs={6}>
              <Figure>
                <Figure.Image id="fightavatar"
                  width={100}
                  height={100}
                  alt="175x175"
                  src={characterImage}
                  className="text-center"
                />
              </Figure>
            </Col>

            <Col lg={0} md={2} ></Col>
          </Row>

          <Row className="text-center" >
            <Col>
              <Button id="fightBtn" onClick={this.fight} variant="primary" size="lg">
                Cast spell!
            </Button>
            </Col>

          </Row>

          <Row>
            <Col lg={3} md={2} ></Col>

            <Col lg={4} md={4} xs={6}>
              <Card id="monster" style={{ width: '200px' }}>
                <h3><strong>{this.state.monsterName}</strong></h3>
                <ul>
                  <li><strong>{this.state.monsterDescription}</strong></li>
                  <li><strong>Strength: </strong>{this.state.monsterStrength}</li>
                </ul>
              </Card>
            </Col>

            <Col lg={4} md={4} xs={6}>
              <Card className="wizard" style={{ width: '200px' }}>
                <h3>{this.state.characterName}</h3>
                <ul>
                  <li><strong>House of {this.state.house}</strong></li>
                  <li><strong>Strength: </strong>{this.state.characterStrength}</li>
                  <li><strong>Lives: </strong>{this.state.lives}</li>
                </ul>
              </Card>
            </Col>
            <Col lg={1} md={2} ></Col>

          </Row>

          <p>{this.state.spellCode}</p>



          <Row className="justify-content-md-center">
            <Col xs={3}>
              <Button
                id="letterBtn"
                name={this.state.spells[0].spell[0].name}
                value={this.state.spells[0].spell[0].value}
                onClick={this.handleCode}
              >{this.state.spells[0].spell[0].name}</Button>
            </Col>

            <Col xs={3}>
              <Button
                id="letterBtn"
                name={this.state.spells[0].spell[1].name}
                value={this.state.spells[0].spell[1].value}
                onClick={this.handleCode}
              >{this.state.spells[0].spell[1].name}</Button>
            </Col>

            <Col xs={3}>
              <Button
                id="letterBtn"
                name={this.state.spells[0].spell[2].name}
                value={this.state.spells[0].spell[2].value}
                onClick={this.handleCode}
              >{this.state.spells[0].spell[2].name}</Button>
            </Col>

            <Col xs={3}>
              <Button
                id="letterBtn"
                name={this.state.spells[0].spell[3].name}
                value={this.state.spells[0].spell[3].value}
                onClick={this.handleCode}
              >{this.state.spells[0].spell[3].name}</Button>
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