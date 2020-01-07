import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInput: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  handleChange = e => {
    this.setState({ searchInput: e.target.value })
  }
  render() {
    const { monsters, searchInput } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchInput.toLowerCase()))
    return (
      <div className="App">
        <h1 className='logo'>Monsters Rolodex</h1>
        <SearchBox placeholder='Filter Monsters' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
