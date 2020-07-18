import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {

  state = {
    feeling: this.props.setFeeling[0],
    understanding: this.props.setUnderstanding[0],
    support: this.props.setSupport[0],
    comments: this.props.setComments[0]
  }

  submitInput = (event) => {
    console.log(this.state)
    this.handleSubmit(this.state);
    this.goNext();
  }

  handleSubmit = (feedback) => {
    axios({
        method: 'POST',
        url: '/submit',
        data: feedback
      })
        .then((response)=>{
         console.log(response)
        })
        .catch( (error) => {
          console.log( 'error adding feedback', error)
        })
  }
  goNext = () => this.props.history.push('/final')


  render() {
    return (
      <div>

        <h3>REVIEW YOUR FEEDBACK</h3>
        <h1>Feeling: {this.props.setFeeling} </h1>
        <h1>Understanding: {this.props.setUnderstanding}</h1>
        <h1>Support: {this.props.setSupport}</h1>
        <h1>Comments: {this.props.setComments}</h1>
        <footer>
          <button onClick={this.submitInput}>Submit</button>
        </footer>
      </div>

    );
  }
}

const putReduxStateOnProps = (reduxState) => {
  return reduxState;
}

export default connect(putReduxStateOnProps)(Review);