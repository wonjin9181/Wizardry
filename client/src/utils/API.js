import axios from "axios";

export default {
  // Gets all books
  getMonsters: () =>{
    return axios.get("/api/monsters");
  },
  getOneMonster:(id)=>{
    console.log('ID????',id);
    return axios.get("/api/monsters/"+id)
  },

  loginUser: (data) => {
    console.log("this: "+ data)
    return axios.post("/api/login", data)},

  createUser: (userData) => {
    console.log("this: " + userData)
    return axios.post("/api/users", userData)
  },
   
}
