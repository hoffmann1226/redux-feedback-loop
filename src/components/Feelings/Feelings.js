import React, { Component } from 'react';
//import connect for use of redux
import {connect} from 'react-redux';

class Feelings extends Component {

//use local state 
state = {
  feeling: '',
}

//capture feeling value using local state
changeState = (event) => {
  console.log("in changeState")
    this.setState({
        feeling: event.target.value,
    })
  }

  //require the user to enter an answer
  submitInput = (event) => {
    event.preventDefault();
    if (this.state.feeling === ''){
     alert('You must choose an answer!')   
    } 
//once an answer is provided, local state is dispatched to the setFeeling reducer in index.js    
    else {
    console.log(this.state.feeling)
    this.props.dispatch({type: 'SET_FEELING', payload: this.state.feeling})
    this.goNext();
  }
}

//props.history takes user to next page
goNext =() => this.props.history.push('/Understanding')

//use a drop down select panel with an onChange to trigger changeState to capture value
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
//because the component uses redux, we need this code at the bottom
const putReduxStateOnProps=(reduxState)=>{
  return reduxState;
}

export default connect(putReduxStateOnProps)(Feelings);