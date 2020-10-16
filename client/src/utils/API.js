import axios from "axios";

export default {
    // Gets all users
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Gets the voter with the given id
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    // Deletes the voter with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a voter to the database
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    updateUser: function (userData) {
        return axios.put("/api/user", userData);
    },
    getLoginUser: function () {
        return axios.get("/api/users");
    }
};

