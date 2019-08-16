import React, { Component } from "react";
import "./main_stats.css";
import { Link } from "react-router-dom";
import API from "../../utils/API"
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { runInThisContext } from "vm";


class MainStats extends Component {

    state = {
        id: "",
        characterName: "",
        house: "",
        strength: "",
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
      
        let self= this
        var key = localStorage.getItem("key")
        
            API.loadUser(key)
                .then(function (result) {
                    console.log(result.data);
                    self.setState({
                        characterName: result.data.characterName,
                        house: result.data.house,
                        strength: result.data.strength
                    });
                }).catch(err => {
                    alert(err);
                });
    
    
        

        
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

                    <div className="row">
                        <div className="col-sm">
                            <Link to="/fight"><button onClick={this.fightMonster}></button></Link>
                            <p>Stage 1</p>
                        </div>
                        <div className="col-sm">
                            <Link to="/fight"><button onClick={this.fightMonster}></button></Link>
                            <p>Stage 2</p>
                        </div>
                        <div className="col-sm">
                            <Link to="/fight"><button onClick={this.fightMonster}></button></Link>
                            <p>Stage 3</p>
                        </div>
                        <div className="col-sm">
                            <Link to="/fight"><button onClick={this.fightMonster}></button></Link>
                            <p>Stage 4</p>
                        </div>

                    </div>


                    <Row className="justify-content-md-center">
                        <Card id="mainCard" style={{ width: '60rem' }}>
                            <Col>
                                <h3 id="userInfo">House Members</h3>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                </ul>
                            </Col>
                        </Card>
                    </Row>

                </Container>
            </div>
        );
    }
}
export default MainStats;
