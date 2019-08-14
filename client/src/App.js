import React, { Component } from "react";
import API from "./utils/API";
import Login from "./components/login/login";
import CreateUser from "./components/create-user/create_user";
import MainStats from "./components/main-stats/main_stats";
import Fight from "./components/fight/fight";
import { BrowserRouter as Router, Route } from "react-router-dom";



class App extends Component {
  state = {
    monsters: []
  }

  loadMonsters = () => {
    API.getMonsters()
      .then(res => {
        console.log(res.data)
        this.setState({ monsters: res.data })
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadMonsters()
  }

  render() {
    return (
      <Router>

      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/createuser" component={CreateUser}/>
        <Route exact path="/fight" component={Fight} />
        <Route exact path="/main" component={MainStats} />
        <Route exact path="/fight" component={Fight} />
      </div>
    </Router>

    )
  }
}

export default App;
