import React, { Component } from 'react';

import './App.css';
import { HomePage } from './pages/homepage/homepage'
class App extends Component {
  constructor()
  {
    super();
    
  }
  render() {
   return <div className="app">
      <HomePage />
    </div>
  }
}
export default App;