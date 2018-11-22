import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RaceBot from './RaceBot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        RFTG Solo Bot
        <RaceBot/>
        </header>
      </div>
    );
  }
}

export default App;
