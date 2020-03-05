import axios from "axios";

export default {

  getMonsters: function() {
    return axios.get("/api/monsters");
  },

  getMonster: function(id) {
    return axios.get("/api/monsters/" + id);
  },

  getPlayer: function() {
      return axios.get("/api/player");
  }
  
};