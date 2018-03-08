import React from 'react';

import MovListElement from './MovieListElement'

function MovieList(props) {


  if(props.movies.length > 0){
    const movie_list = props.movies;
    const movie_element_list = movie_list.map((mov) =>
      <MovListElement key={mov.title.toString()}
                value={mov.title} />
    );

    return (
      <ul>
        {movie_element_list}
      </ul>  
    );
  } else {
    return (
      <h2>No movies created</h2>  
    );
  }
}

export default MovieList;