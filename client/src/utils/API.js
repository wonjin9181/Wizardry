import axios from "axios";

export default {
  // Gets all books
  getMonsters: () => {
    return axios.get("/api/monsters");
  },

  getOneMonster:(id)=>{
    console.log('ID????',id);
    return axios.get("/api/monsters/"+id)

  },

  loginUser: (data) => {
    console.log("this: " + data)
    return axios.post("/api/login", data)
  },


  getHouseMembers: (data) => {
    return axios.get("/api/house/" + data)
  },

  createUser: (userData) => {
    console.log("this: " + userData)
    return axios.post("/api/users", userData)
  },

  loadUser: (userData) => {
    console.log("this: " + userData)
    return axios.get("/api/users/" + userData)
  },


  postHouse: (userData) => {
    return axios.post("/api/house", userData)
  }
   
}
