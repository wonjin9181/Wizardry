import React, { Component } from "react";
import API from "./utils/API"
import Login from "./components/login/login"
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
        <Route exact path="/" component={Fight} />
        <Route exact path="/" component={MainStats} />
        
        
      </div>
    </Router>
    )
  }
}

export default App;
