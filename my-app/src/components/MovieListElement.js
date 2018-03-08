import React from 'react';
import style from './MovieListElement.css'

function ListItem(props) {
  return (
  	<li>
  		<div className="movie">
  			<label>title <div className="movieatr">'{props.value.title}'</div></label>
  			<label>year <div className="movieatr">{props.value.year}</div></label> 
  			<label>duration <div className="movieatr">{props.value.duration}</div></label>

  		</div>	
  	</li>);
}

export default ListItem;