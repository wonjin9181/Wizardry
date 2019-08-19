import React, { Component } from "react";
import "./main_stats.css";
import { Link } from "react-router-dom";
import API from "../../utils/API"
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { runInThisContext } from "vm";


class MainStats extends Component {

    state = {
        id: "",
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
        if (key) {


            API.loadUser(key)
                .then(function (result) {
                    // console.log(result.data);
                    self.setState({
                        characterName: result.data.characterName,
                        house: result.data.house,
                        strength: result.data.strength
                    }, function () {

                        console.log("house:" + self.state.house)
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
            <div>

                <Container id="mainContainer">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Card id="mainCard" style={{ width: '13rem' }}>
                                <img src={"https://picsum.photos/id/122/200/200"} alt="main-stats" />

                            </Card>
                        </Col>

                        <Col md="auto">
                            <Card id="mainCard" style={{ width: '18rem' }}>
                                <h3 id="userInfo">User Info</h3>
                                <ul>
                                    <li>Name: {this.state.characterName}</li>
                                    <li>House: {this.state.house}</li>
                                    <li>Strength: {this.state.strength}</li>
                                    <li>Spells: </li>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                    <br></br>

                    <br></br>

                    <Row className="justify-conent-x1-center">
                        <Col xs={2}>
                            <Link to="/fight?monster=1"><Button onClick={this.fightMonster}>1</Button></Link>

                        </Col>
                        <Col xs={2}>
                            <Link to="/fight?monster=2"><Button onClick={this.fightMonster}>2</Button></Link>

                        </Col>
                        <Col xs={2}>
                            <Link to="/fight?monster=3"><Button onClick={this.fightMonster}>3</Button></Link>

                        </Col>
                        <Col xs={2}>
                            <Link to="/fight?monster=4"><Button onClick={this.fightMonster}>4</Button></Link>

                        </Col>
                    </Row>


                    <Row className="justify-content-md-center">
                        <Card id="mainCard" style={{ width: '60rem' }}>
                            <Col>
                            {this.state.houseMembers.map(house=>(
                                <li>{house.user}</li>
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
