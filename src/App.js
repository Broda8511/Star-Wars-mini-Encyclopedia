import React, {Component} from 'react';
import './App.css';
import Navbar from './layouts/Navbar';
import Main from './layouts/Main';

class App extends Component {
  render() {
    
  return (
    <div className="App">
      <header className="App-header">
        <h1>STAR WARS</h1>
        <span><p>Mini Encyclopedia</p></span>
      </header>

      <nav className="nav">
        <Navbar />        
      </nav>

      <main>
        {<Main />}
      </main>      
    </div>
  );
}}

export default App;