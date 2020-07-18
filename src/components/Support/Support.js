import React, { Component } from 'react';
import {connect} from 'react-redux';

class Support extends Component {

state = {
  support: '',
}

changeType = (event) => {
  console.log("in ChangeType")
    this.setState({
        support: event.target.value,
    })
  }

  
  submitInput = (event) => {
    event.preventDefault();
    console.log(this.state.support)
    if (this.state.support === ''){
      alert('You must choose an answer!')   
     } else {
    this.props.dispatch({type: 'SET_SUPPORT', payload: this.state.support})
    this.goNext();
     }
  }
goNext =() => this.props.history.push('/Comments')

  render() {
    return (
      
      <div>
        <p>Question 3 of 4</p>
        <h1>How well are you being supported?</h1>
        <select onChange={this.changeType}>
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

export default connect(putReduxStateOnProps)(Support);