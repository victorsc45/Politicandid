import axios from "axios";

export default {
    // Gets all voters
    getVoters: function () {
        return axios.get("/api/voters");
    },
    // Gets the voter with the given id
    getVoter: function (id) {
        return axios.get("/api/voters/" + id);
    },
    // Deletes the voter with the given id
    deleteVoter: function (id) {
        return axios.delete("/api/voters/" + id);
    },
    // Saves a voter to the database
    saveVoter: function (voterData) {
        return axios.post("/api/voters", voterData);
    },
    updateVoter: function (voterData) {
        return axios.put("/api/voter", voterData);
    },
    getLoginUser: function () {
        return axios.get("/api/users"); 
    }
};

