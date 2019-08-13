import React, { Component } from "react";
import API from "./utils/API"
import Login from "./components/login/login"
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainStats from "./components/main-stats/main_stats"

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
        <Route exact path="/main" component={MainStats} />
      </div>
    </Router>
    )
  }
}

export default App;
