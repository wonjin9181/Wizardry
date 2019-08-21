import React, { Component } from "react";
import "./main_stats.css";
import { Link } from "react-router-dom";
import API from "../../utils/API"
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import userAvatars from '../fight/userAvatars';
// import { runInThisContext } from "vm";
import backgroundImages from './backgroundImages';


class MainStats extends Component {

    state = {
        id: "",
        characterName: "",
        house: "",
        characterStrength: "",
        bgImage: '',
        houseMembers: [],
        monsters: [],
        monsterStrength: "",
        monsterDescription: "",
        characterImage: "",
        monster1: {},
        monster2: {},
        monster3: {},
        monster4: {}
    };

    loadMonsters = () => {
        API.getMonsters()
            .then(res => {
                // console.log(res.data)
                this.setState({ monsters: res.data })

            })
            .catch(err => console.log(err));
    };


    componentDidMount() {
        this.loadMonsters();

        let self = this;
        var key = localStorage.getItem("key");


        if (key) {
            // console.log(key)
            API.loadUser(key)
                .then(function (result) {

                    let { src } = userAvatars[result.data.characterImage - 1]
                    // console.log(result.data);
                    self.setState({
                        characterName: result.data.characterName,
                        house: result.data.house,
                        characterStrength: result.data.strength,
                        characterImage: src
                    }, function () {
                        let image = backgroundImages.find(object => {
                            return object.name === this.state.house;
                        })
                        this.setState({ bgImage: image })

                        API.getHouseMembers(self.state.house)

                            .then(function (result) {
                                // console.log(result.data)
                                self.setState({
                                    houseMembers: result.data
                                }, function () {

                                    API.getMonsters()
                                        .then(res => {
                                            console.log(res.data)
                                            self.setState({
                                                monster1: res.data[0],
                                                monster2: res.data[1],
                                                monster3: res.data[2],
                                                monster4: res.data[3]
                                            })
                                            console.log(self.state.monster1.monsterDescription)
                                        })
                                        .catch(err => console.log(err));

                                })
                            })

                    });
                }).catch(err => {
                    alert(err);
                });

        }
    };

    render() {
        const { characterImage } = this.state;
        return (

            <div style={{ hight: "150vh", backgroundImage: `url("${this.state.bgImage.src}")` }}>
                <Container id="mainContainer">
                    <Link to="/">
                        <Button className="logoutBtn" variant="primary">
                            Logout
                           </Button>
                    </Link>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Card className="mainCard" id="avatar">

                                <img src={characterImage} alt="main-stats" id="avatar2" />

                            </Card>
                        </Col>

                        <Col md="auto">
                            <Card className="mainCard" style={{ width: '18rem' }}>
                                <h3 id="userInfo">User Info</h3>
                                <ul>
                                    <h6>Name: {this.state.characterName}</h6>
                                    <h6>House: {this.state.house}</h6>
                                    <h6>Strength: {this.state.strength}</h6>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>

                    <Row className="justify-content-md-center">

                        <Col xs={2}>

                            <Card id="mainCard" style={{ width: '14rem' }}>
                                <h3 id="userInfo">Monster Info</h3>
                                <ul>
                                    <h6>Name: {this.state.monster1.monsterName}</h6>
                                    <h6>Description: {this.state.monster1.monsterDescription}</h6>
                                    <h6>Strength: {this.state.monster1.strength}</h6>
                                </ul>
                            </Card>
                            <Link to="/fight?monster=1"><Button > Stage 1</Button></Link>

                        </Col>
                        <Col xs={2}>
                            <Card id="mainCard" style={{ width: '14rem' }}>
                                <h3 id="userInfo">Monster Info</h3>
                                <ul>
                                    <h6>Name: {this.state.monster2.monsterName}</h6>
                                    <h6>Description: {this.state.monster2.monsterDescription}</h6>
                                    <h6>Strength: {this.state.monster2.strength}</h6>
                                </ul>
                            </Card>
                            <Link to="/fight?monster=2"><Button > Stage 2</Button></Link>

                        </Col>
                        <Col xs={2}>
                            <Card id="mainCard" style={{ width: '14rem' }}>
                                <h3 id="userInfo">Monster Info</h3>
                                <ul>
                                    <h6>Name: {this.state.monster3.monsterName}</h6>
                                    <h6>Description: {this.state.monster3.monsterDescription}</h6>
                                    <h6>Strength: {this.state.monster3.strength}</h6>
                                </ul>
                            </Card>
                            <Link to="/fight?monster=3"><Button > Stage 3</Button></Link>

                        </Col>
                        <Col xs={2}>
                            <Card id="mainCard" style={{ width: '14rem' }}>
                                <h3 id="userInfo">Monster Info</h3>
                                <ul>
                                    <h6>Name: {this.state.monster4.monsterName}</h6>
                                    <h6>Description: {this.state.monster4.monsterDescription}</h6>
                                    <h6>Strength: {this.state.monster4.strength}</h6>
                                </ul>
                            </Card>
                            <Link to="/fight?monster=4"><Button >  Stage 4</Button></Link>


                        </Col>
                    </Row>

                    <br></br>

                    <Row id="houseText">
                        <Col>
                            <h4>{this.state.house} House Members</h4>
                        </Col>
                    </Row>


                    <Row className="justify-content-md-center">
                        <Card id="houseMembers">

                        <h5>House Members</h5>
                        
                            <Col>


                                {this.state.houseMembers.map(house => (

                                    <li
                                        key={house.id}>{house.user}</li>
                                ))}


                            </Col>

                        </Card>
                    </Row>

                </Container>
            </div>
        );
    }
}
export default MainStats;