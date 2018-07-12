import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BasicForm from "./BasicForm/index";
import TroubledForm from "./TroubledForm/index";
import ComportableForm from "./ComfortableForm/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BasicForm />
        <h2>Pure</h2>
        <TroubledForm permission={["read", "write"]} />
        <h2>Formik</h2>
        <ComportableForm permissions={["exec", "write"]}/>
      </div>
    );
  }
}

export default App;
