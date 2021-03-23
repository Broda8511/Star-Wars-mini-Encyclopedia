import React, { Component } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import logo from "./images/logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <span>
            <p>Mini Encyclopedia</p>
          </span>
        </header>

        <nav className="nav">
          <Navbar />
        </nav>

        <main>{<Main />}</main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
