import React, { Component } from 'react';
import './App.css';
import CharList from './components/CharList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 1,
      itemsPerPage: 6
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing. NOT NOW, MAN.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  pageStart = () => {
    return (
      (this.state.currentPage) *
      (this.state.itemsPerPage) -
      (this.state.itemsPerPage - 1)
    )
  }

  pageEnd = () => {
    return (
      (this.state.currentPage) *
      (this.state.itemsPerPage)
    )
  }

  render() {
    console.log(this.pageStart(), this.pageEnd())
    return (
      <div className='App'>
        <h1 className='Header'>React Wars</h1>
        <CharList 
          charArray={this.state.starwarsChars}
          pageStart={this.pageStart()}
          pageEnd={this.pageEnd()}
        />
      </div>
    );
  }
}

export default App;
