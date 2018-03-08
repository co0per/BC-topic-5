import React, { Component } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from  './components/MovieList';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      movie_list: []
    }
  }

  handleInput(new_mov){ //adds a movie
  	let list = this.state.movie_list;
  	list.push(new_mov);
  	this.setState({ movie_list: list });
  }

  render() {
    return (
      <div>
        <MovieForm onInput={this.handleInput.bind(this)} />
        <MovieList movies={this.state.movie_list} />
      </div>
    );
  }
}

export default App;
