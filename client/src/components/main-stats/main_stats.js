import React, { Component } from "react";
import "./main_stats.css";
import { } from "react-bootstrap";
import { Link } from "react-router-dom";



class MainStats extends Component {

    state = {
        fight: {
            monster1: false,
            monster2: false,
            monster3: false,
            monster4: false
        }

    };
    fightMonster = () => {
        this.setState({ fightMonster: true })
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">img</div>
                        <div className="col-sm-4">
                            <h1>User Info</h1>
                            <ul>
                                <li>Name: </li>
                                <li>House:</li>
                                <li>Strength: </li>
                                <li>Spells: </li>
                            </ul>
                        </div>
                    </div>
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
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>House Members</h1>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MainStats;