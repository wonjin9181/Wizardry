import axios from "axios";

export default {
  getMonsters: () => {
    return axios.get("/api/monsters");
  },

  getOneMonster: (id) => {
    return axios.get("/api/monsters/" + id)
  },

  loginUser: (data) => {
    return axios.post("/api/login", data)
  },

  createUser: (userData) => {
    return axios.post("/api/users", userData)
  },

  loadUser: (userData) => {
    let rval = axios.get("/api/users/" + userData)
    return rval;
  },

  updateUser: (userData, id) => {
    return axios.put("/api/users/" + id, userData)
  },

  updateStrength: (userData, id) => {
    return axios.put("/api/users/strength/" + id, userData)
  },

  deleteUser: (id) => {
    return axios.delete("/api/users/" + id)
  },

  deleteHouseUser: (id) => {
    return axios.delete("/api/house/users/" + id)
  },

  getHouseMembers: (data) => {
    return axios.get("/api/house/" + data)
  },

  postHouse: (userData) => {
    return axios.post("/api/house", userData)
  }

}
