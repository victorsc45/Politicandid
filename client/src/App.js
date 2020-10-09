import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "../src/utils/API";

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
