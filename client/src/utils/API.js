import axios from "axios";

export default {
  // Gets all books
  getMonsters: () =>{
    return axios.get("/api/monsters");
  },

  loginUser: (data) => {axios.post("/api/login", data)}


}
