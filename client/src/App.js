import React, { Component } from "react";
import API from "./utils/API"


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
    return (
   <div>
     {this.state.monsters.map(monster => (
       <p>{monster.monsterName}</p>
     ))}
   </div>
    );
  }
}

export default App;
