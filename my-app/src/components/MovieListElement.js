import React, { Component } from 'react';
import style from './MovieListElement.css'

class MovieListItem extends Component {

	delete = (e) => {
		e.preventDefault();
    	e.stopPropagation();
		this.props.deleteMov(this.props.value);
	}

	render() {
	  	return (
		  	<li>
		  		<div className="movie">
		  			<label>title <div className="movieatr">'{this.props.value.title}'</div></label>
		  			<label>year <div className="movieatr">{this.props.value.year}</div></label> 
		  			<label>duration <div className="movieatr">{this.props.value.duration}</div></label>
		  			<button className="center" > Edit </button>
		  			<button className="center" onClick={e => this.delete(e)}> Delete </button>
		  		</div>	
		  	</li>
		);
	}
}

export default MovieListItem;