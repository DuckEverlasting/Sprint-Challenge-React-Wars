import React, { Component } from 'react';
import './App.css';
import CharList from './components/CharList';
import PageBar from './components/PageBar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 1,
      itemsPerPage: 10,
      totalPages: 0,
      previousPage: '',
      nextPage: ''
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
        this.setState({
          starwarsChars: data.results,
          previousPage: data.previous,
          nextPage: data.next
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // totalPagesCheck = () => {
  //   let pages = (Math.ceil(this.state.starwarsChars.length / this.state.itemsPerPage))
  //   console.log(pages)
  //   if (pages === this.state.totalPages) {return}
  //   this.setState({
  //     totalPages: pages
  //   })
  // }

  pageStart = () => {
    return (
      (this.state.currentPage) *
      (this.state.itemsPerPage) -
      (this.state.itemsPerPage - 1)
    )
  }
  compo
  pageEnd = () => {
    return (
      (this.state.currentPage) *
      (this.state.itemsPerPage)
    )
  }

  pageChange = (i) => {
    this.setState({
      currentPage: i
    })
  }

  pageBack = () => {
    // if (this.state.currentPage <= 1) {return}
    // this.setState({
    //   currentPage: this.state.currentPage - 1
    // })
    if (this.state.previousPage === null) {return}
    this.getCharacters(this.state.previousPage)
  }

  pageForward = () => {
    // if (this.state.currentPage >= this.state.totalPages) {return}
    // this.setState({
    //   currentPage: this.state.currentPage - 1
    // })
    if (this.state.nextPage === null) {return}
    this.getCharacters(this.state.nextPage)
  }

  render() {
    return (
      <div className='App'>
        <h1 className='Header'>React Wars</h1>
        <CharList 
          charArray={this.state.starwarsChars}
          pageStart={this.pageStart()}
          pageEnd={this.pageEnd()}
        />
        <PageBar
          totalPages={this.state.totalPages}
          pageChange={this.pageChange}
          pageBack={this.pageBack}
          pageForward={this.pageForward}
        />
      </div>
    );
  }
}

export default App;
