import React, { Component } from "react";
import { Header } from "./components/Header";
import { Songs } from "./components/Songs";
import "./style/main.css";

class App extends Component {
  componentDidMount() {
    console.log("La app está lista para Monkear!🤘");
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App__title">
          <h1>Ponte Monk!</h1>
        </div>
        <Songs />
      </div>
    );
  }
}

export default App;
