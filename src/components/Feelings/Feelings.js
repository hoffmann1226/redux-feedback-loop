import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feelings extends Component {

state = {
  feeling: '',
}

changeState = (event) => {
  console.log("in changeState")
    this.setState({
        feeling: event.target.value,
    })
  }

  
  submitInput = (event) => {
    event.preventDefault();
    if (this.state.feeling === ''){
     alert('You must choose an answer!')   
    } else {
    console.log(this.state.feeling)
    this.props.dispatch({type: 'SET_FEELING', payload: this.state.feeling})
    this.goNext();
  }
}

goNext =() => this.props.history.push('/Understanding')


  render() {
    return (
      
      <div>
        <p>Question 1 of 4</p>
        <h1>How are you feeling today?</h1>
        <select onChange={this.changeState}>
          <option value="1">1</option>
          <option value="2">2</option> 
          <option value="3">3</option> 
          <option value="4">4</option> 
          <option value="5">5</option> 
        </select>
        
      
      <footer>
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