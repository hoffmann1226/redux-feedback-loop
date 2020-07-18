import React, { Component } from 'react';
import {connect} from 'react-redux';

class Final extends Component {


goNext =() => this.props.history.push('/')

  render() {
    return (
      
      <div>
        <h1>Thanks for your feedback!</h1>
      
         
      <footer>
      <button onClick={this.goNext}>Leave New Feedback</button>
      
      </footer>
      </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
  return reduxState;
}

export default connect(mapReduxStateToProps)(Final);