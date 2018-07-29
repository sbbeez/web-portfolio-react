import React, { Component } from "react";
import "./App.css";
import Home from "./screens/Home";
import NavBar from "./components/common/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home />
      </div>
    );
  }
}

export default App;
