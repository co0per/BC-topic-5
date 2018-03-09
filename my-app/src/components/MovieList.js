import React, { Component } from 'react';
import MovieStyle from './MovieList.css'
import MovListElement from './MovieListElement'

class MovieList extends Component {

  deleteMovie(movie){
    this.props.deleteMov(movie);
  }

  render(){
    if(this.props.movies.length > 0){
      const movie_list = this.props.movies;
      const movie_element_list = movie_list.map((mov) =>
        <MovListElement key={mov.title.toString()}
                  value={mov} deleteMov={this.deleteMovie.bind(this)} />
      );

      return (
        <div className="list">
          <div className="graysection">
            <h2>Created Movies</h2>
            <ul>
              {movie_element_list}
            </ul>  
          </div>
        </div>
      );
    } else {
      return (
        <div className="list">
          <h2 className="graysection">No movies created</h2>
        </div>
      );
    }
  }
}

export default MovieList;