import React, { Component } from 'react';
import style from './MovieListElement.css'

class MovieListItem extends Component {

	constructor(){
		super();
		this.state = {
			edit_mode: 0,
			title: '',
			year: '',
			duration: ''
		};
	}

	delete = (e) => {
		e.preventDefault();
    	e.stopPropagation();
		this.props.deleteMov(this.props.value);
	}

	edit = (e) => {
		this.setState({ edit_mode: 1});
	}

	finish_edit = (e) => {
		e.preventDefault();
    	e.stopPropagation();
    	let edit_obj = {
    		old_mov: this.props.value,
    		new_title: this.state.title,
    		new_year: this.state.year,
    		new_duration: this.state.duration
    	}
		this.props.editMov(edit_obj);
	}

	changed(e){
	    this.setState({
	    	[e.target.id]: e.target.value
	    });
	};

	render() {
		if(!this.state.edit_mode){
			return (
			  	<li>
			  		<div className="movie">
			  			<label>title <div className="movieatr">'{this.props.value.title}'</div></label>
			  			<label>year <div className="movieatr">{this.props.value.year}</div></label> 
			  			<label>duration <div className="movieatr">{this.props.value.duration}</div></label>
			  			<button className="center" onClick={e => this.edit(e)}> Edit </button>
			  			<button className="center" onClick={e => this.delete(e)}> Delete </button>
			  		</div>	
			  	</li>
			);	
		} else {
			return (
			  	<li>
			  		<div className="movie">
			  			<label>title 
				  			<input 
					            className="edit"
					            type="text" 
					            id="title" 
					            value={this.state.title} 
					            onChange={(event) => this.changed(event)}
					        />
			            </label>
			  			<label>year 
			  				<input 
					            className="edit"
					            type="text" 
					            id="year" 
					            value={this.state.year} 
					            onChange={(event) => this.changed(event)}
					        />
			  			</label> 
			  			<label>duration 
			  				<input 
					            className="edit"
					            type="text" 
					            id="duration" 
					            value={this.state.duration} 
					            onChange={(event) => this.changed(event)}
					        />
			  			</label>
			  			<button className="center" onClick={e => this.finish_edit(e)}> Apply changes </button>
			  		</div>	
			  	</li>
			);
		}
	}
}

export default MovieListItem;