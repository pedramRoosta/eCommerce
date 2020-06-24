import React, { Component } from 'react';

import './App.css';
import { GalList } from './components/gal-list/gal-list';
import { Searchbox } from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      galleryItems: [],
      searchTerm: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(j => this.setState({ galleryItems: j }))
  }
  onChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }
  render() {
    const { galleryItems, searchTerm } = this.state;
    const filtered = galleryItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
      <div className="App">
        <h1 className="app-title">My First Profile</h1>
        <Searchbox onChangefunc={this.onChange} placeHolder='Search items' />
        <GalList galItems={filtered} />

      </div>
    );
  }
}

export default App;
