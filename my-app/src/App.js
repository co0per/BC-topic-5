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

  deleteMovie(movie){
    let list = this.state.movie_list;
    let index = list.indexOf(movie);
    if(index > -1) {
        list.splice(index, 1);
    }
    this.setState({ movie_list: list });
  }

  editMovie(obj){
    let list = this.state.movie_list;
    let index = list.indexOf(obj.old_mov);
    if(index > -1) {
        list[index].title = obj.new_title;
        list[index].year = obj.new_year;
        list[index].duration = obj.new_duration;
    }
    this.setState({ movie_list: list });
  }

  render() {
    return (
      <div>
        <MovieForm onInput={this.handleInput.bind(this)} />
        <MovieList 
          movies={this.state.movie_list} 
          deleteMov={this.deleteMovie.bind(this)} 
          editMov={this.editMovie.bind(this)}
        />
      </div>
    );
  }
}

export default App;