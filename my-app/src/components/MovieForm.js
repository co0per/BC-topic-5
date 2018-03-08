import React, { Component } from 'react';

import './MovieForm.css';
import Movie from './../script/Movie';

class MovieForm extends Component {

  constructor(){
    super();
    this.state = { 
      title: '',
      year: '',
      duration: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let new_mov = new Movie(this.state.title, this.state.year, this.state.duration);
    this.props.onInput(new_mov);
  };

  changed(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  };


  render() {
    return (
      <div className="form"> 
        <form>
          <h1 className="center_text">Insert movie</h1>  
          <label className="center_text">Title</label>
          <input 
            className="center"
            type="text" 
            id="title" 
            value={this.state.title} 
            onChange={(event) => this.changed(event)}
            />
          <label className="center_text">Year</label>
          <input 
            className="center"
            type="text" 
            id="year" 
            value={this.state.year} 
            onChange={(event) => this.changed(event)}
            /> 
          <label className="center_text">Duration</label>
          <input 
            className="center"
            type="text" 
            id="duration" 
            value={this.state.duration} 
            onChange={(event) => this.changed(event)}
            />
          <button className="center" onClick={e => this.onSubmit(e)}> Create </button>
        </form>
      </div>
    );
  }
}

export default MovieForm;