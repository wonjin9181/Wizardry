import axios from "axios";

export default {
  // Gets all books
  getMonsters: () => {
    return axios.get("/api/monsters");
  },
  getOneMonster: () => {
    return axios.get("/api/monsters/:monster")
  },

  loginUser: (data) => {
    console.log("this: " + data)
    return axios.post("/api/login", data)
  },

  createUser: (userData) => {
    console.log("this: " + userData)
    return axios.post("/api/users", userData)
  },

  loadUser: (userData) => {
    console.log("this: " + userData)
    return axios.get("/api/users/" + userData)
  },



}
