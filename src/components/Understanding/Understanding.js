//same comments and logic as in feeling.js 

import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feelings extends Component {

state = {
  understanding: '',
}

changeState = (event) => {
  console.log("in changeState")
    this.setState({
        understanding: event.target.value,
    })
  }

  
  submitInput = (event) => {
    event.preventDefault();
    console.log(this.state.understanding)
    if (this.state.understanding === ''){
      alert('You must choose an answer!')   
     } else {
    this.props.dispatch({type: 'SET_UNDERSTANDING', payload: this.state.understanding})
    this.goNext();
     }
  }
goNext =() => this.props.history.push('/Support')
goBack =() => this.props.history.push('/')

  render() {
    return (
      
      <div>
        <p>Question 2 of 4</p>
        <h1>How well are you understanding the content?</h1>
        <select onChange={this.changeState}>
          <option value="1">1</option>
          <option value="2">2</option> 
          <option value="3">3</option> 
          <option value="4">4</option> 
          <option value="5">5</option> 
        </select>
        
      
      <footer>
      <button onClick={this.goBack}>Back</button>
      <button onClick={this.submitInput}>Next</button>
      </footer>
      </div>
    );
  }
}

const putReduxStateOnProps=(reduxState)=>{
  return reduxState;
}

export default connect(putReduxStateOnProps)(Feelings);