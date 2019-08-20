import axios from "axios";

export default {
  // Gets all books
  getMonsters: () => {
    return axios.get("/api/monsters");
  },

  getOneMonster: (id) => {

    // console.log('ID????', id);

    return axios.get("/api/monsters/" + id)

  },

  loginUser: (data) => {
    // console.log("this: " + data)
    return axios.post("/api/login", data)
  },

  createUser: (userData) => {
    // console.log("this: " + userData)
    return axios.post("/api/users", userData)
  },

  loadUser: (userData) => {
    // console.log("this: " + userData)
    return axios.get("/api/users/" + userData)
  },


  updateUser: (userData, id) => {
    console.log(userData)
    return axios.put("/api/users/"+id, userData)
  },


  getHouseMembers: (data) => {
    return axios.get("/api/house/" + data)
  },


  postHouse: (userData) => {
    return axios.post("/api/house", userData)
  }

}
