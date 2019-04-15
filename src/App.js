import React, { Component } from 'react';
import './App.css';

import SuperHeroes from './components/SuperHeroes'


class App extends Component {
  render() {
    return (
      <div className="App">
          <SuperHeroes/>
      </div>
    );
  }
}

export default App;
