import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Posts from "./components/Posts/Posts";
class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="main-heading">Breaking News</h1>

        <Posts />
      </div>
    );
  }
}

export default App;
