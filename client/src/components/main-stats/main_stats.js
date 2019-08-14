import React, { Component } from "react";
import { Button, Form, Jumbotron, Container } from "react-bootstrap";
// import "./main_stats.css"

class MainStats extends Component {

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
                            <button></button>
                            <p>Stage 1</p>
                        </div>
                        <div className="col-sm">
                            <button></button>
                            <p>Stage 2</p>
                        </div>
                        <div className="col-sm">
                            <button></button>
                            <p>Stage 3</p>
                        </div>
                        <div className="col-sm">
                            <button></button>
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