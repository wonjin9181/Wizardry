import axios from "axios";

export default {
  // Gets all books
  getMonsters: function() {
    return axios.get("/api/monsters");
  }
}
