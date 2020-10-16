import React, { Component } from "react";
import API from "../../utils/API";

function App() {
    const data = API.getLoginUser();
    return (
        <ul>
            <li> {data.name} </li>
            <li> {data.ZIP} </li>
        </ul>
    );
}

export default App;