import React, { Component } from "react";
import API from "./utils/API";
class App extends Component {
  state= {
    monsters :[]
  }
  
  loadMonsters = () => {
    API.getMonsters()
      .then(res =>{
          console.log(res.data)
        this.setState({ monsters: res.data})
      } )
      .catch(err => console.log(err));
  };
  
  componentDidMount(){
    this.loadMonsters()
  }
  
    render() {
    }
}

export default App;
