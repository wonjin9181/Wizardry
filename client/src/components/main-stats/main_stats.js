import React, { Component } from "react";
import "./main_stats.css";
import { Link } from "react-router-dom";
import API from "../../utils/API"
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { runInThisContext } from "vm";
import backgroundImages from './backgroundImages';

class MainStats extends Component {

    state = {
        id: "",
        characterName: "",
        house: "",
        strength: "",
        bgImage: '',
        houseMembers: [],
        monsters: [],
        fight: {
            monster1: false,
            monster2: false,
            monster3: false,
            monster4: false
        }
    };


    loadMonsters = () => {
        API.getMonsters()
            .then(res => {

                console.log(res.data)

                this.setState({ monsters: res.data })
            })
            .catch(err => console.log(err));
    };

    fightMonster = () => {
        this.setState({ fightMonster: true })
    };


    componentDidMount() {
        this.loadMonsters();

        let self = this
        var key = localStorage.getItem("key")


        API.loadUser(key)
            .then(function (result) {
                console.log(result.data);
                self.setState({
                    characterName: result.data.characterName,
                    house: result.data.house,
                    strength: result.data.strength
                }, function () {


                });
            }).catch(err => {
                alert(err);
            });


        if (key) {


            API.loadUser(key)
                .then(function (result) {
                    // console.log(result.data);
                    self.setState({
                        characterName: result.data.characterName,
                        house: result.data.house,
                        strength: result.data.strength
                    }, function () {
                        let image = backgroundImages.find(object => {
                            return object.name === this.state.house;
                        })
                        this.setState({ bgImage: image })

                        API.getHouseMembers(self.state.house)

                            .then(function (result) {
                                console.log(result.data)
                                self.setState({
                                    houseMembers: result.data
                                })
                            })


                    });
                }).catch(err => {
                    alert(err);
                });

        }



    };




    render() {
        return (
            <div style={{ hight: "150vh", backgroundImage: `url("${this.state.bgImage.src}")` }}>

                <Container id="mainContainer">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Card id="mainCard" style={{ width: '13rem' }}>
                                <img id="character" src={"https://picsum.photos/id/122/200/200"} alt="main-stats" />

                            </Card>
                        </Col>

                        <Col md="auto">
                            <Card id="mainCard" style={{ width: '18rem' }}>
                                <h3 id="userInfo">User Info</h3>
                                <ul>
                                    <h6>Name: {this.state.characterName}</h6>
                                    <h6>House: {this.state.house}</h6>
                                    <h6>Strength: {this.state.strength}</h6>
                                    <h6>Spells: </h6>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                    <br></br>

                    <br></br>

                    <Row className="justify-content-md-center">
                        <Col xs={2}>

                            <Link to="/fight?monster=1"><Button onClick={this.fightMonster}> Stage 1</Button></Link>

                        </Col>
                        <Col xs={2}>
                            <Link to="/fight?monster=2"><Button onClick={this.fightMonster}> Stage 2</Button></Link>

                        </Col>
                        <Col xs={2}>
                            <Link to="/fight?monster=3"><Button onClick={this.fightMonster}> Stage 3</Button></Link>

                        </Col>
                        <Col xs={2}>
                            <Link to="/fight?monster=4"><Button onClick={this.fightMonster}>  Stage 4</Button></Link>


                        </Col>
                    </Row>
                    <br></br>

                    <Row className="justify-content-md-center">
                        <Card id="houseMembers" style={{ width: '25rem' }}>
                        <Col>

                             {this.state.houseMembers.map(house => (
                                <h5>{house.user}</h5>
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
