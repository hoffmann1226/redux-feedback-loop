import React, { Component } from 'react';
import {connect} from 'react-redux';

class Comments extends Component {

state = {
  comments: '',
}

changeType = (event) => {
  console.log("in ChangeType")
    this.setState({
        comments: event.target.value,
    })
  }

  
  submitInput = (event) => {
    event.preventDefault();
    console.log(this.state.understanding)
    this.props.dispatch({type: 'SET_COMMENTS', payload: this.state.comments})
    this.goNext();
  }
goNext =() => this.props.history.push('/Review')

  render() {
    return (
      
      <div>
        <p>Question 2 of 4</p>
        <h1>Any comments you want to leave?</h1>
        <input onChange={this.changeType}></input>
         
      <footer>
      <button onClick={this.submitInput}>Next</button>
      
      </footer>
      </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
  return reduxState;
}

export default connect(mapReduxStateToProps)(Comments);