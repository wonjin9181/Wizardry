import axios from "axios";

export default {
  // Gets all books
  getMonsters: () =>{
    return axios.get("/api/monsters");
  },
  getOneMonster:()=>{
    return axios.get("/api/monsters/:monster")
  },

  loginUser: (data) => {axios.post("/api/login", data)}

  
   
}
