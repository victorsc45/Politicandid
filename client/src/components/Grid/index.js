import React, { Component } from "react";
import API from "../../utils/API";
// default component setup for a first-time user Component not used at this time
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