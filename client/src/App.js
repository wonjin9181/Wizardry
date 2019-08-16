import React, { Component } from "react";
import Login from "./components/login/login";
import CreateUser from "./components/create-user/create_user";
import MainStats from "./components/main-stats/main_stats";
import Fight from "./components/fight/fight";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API"



class App extends Component {


  state = {
    email: "",
    password: "",
    strength: "",
    characterName: "",
    house: "",
    play: false
  };


  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    let self = this;
    event.preventDefault();
    console.log(this.state)

    API.loginUser(this.state)
      .then(function (result) {

        console.log(result)
        let data = result.data
        if (result.data.isUser) {
          self.setState({
            play: true,
            house: data.house,
            strength: data.strength,
            characterName: data.characterName,
            password:""
          })
        }
        else {
          alert('Incorrect Username and/or Password!');
        }

      }).catch(err => {
        alert(err);
      })

  }



  render() {
    return (
      <Router>

        <div>
          <Route exact path="/" component={() => <Login
            playGame={this.playGame}
            validateForm={this.validateForm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state}
          />} />

          <Route exact path="/createuser" component={CreateUser} />


          <Route exact path="/fight" component={() => <Fight
            email={this.state.email}
            house={this.state.house}
            strength={this.state.strength}
            characterName={this.state.characterName}
          />} />


          <Route exact path="/main" component={() => <MainStats
            email={this.state.email}
            house={this.state.house}
            strength={this.state.strength}
            characterName={this.state.characterName}
          />} />


        </div>
      </Router>

    )
  }
}

export default App;
