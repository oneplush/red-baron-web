import React, { Component } from 'react';
import gear from './gear.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Red Baron
        </header>
        <main>
        <div className="gear-container">
            <img className="gear" src={gear} />
            <div class="gear-text">TYPICAL</div>
        </div>
        <div className="gear-container">
            <img className="gear" src={gear} />
            <div class="gear-text">CUSTOM</div>
        </div>
        </main>
      </div>
    );
  }
}

export default App;
