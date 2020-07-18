import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {

    //use redux reducers to bring in data and assign it in local state
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

//once data is gathered, send it to the server then to the database (see server.js to track axios path)
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
  goBack =() => this.props.history.push('/Comments')


  render() {
    return (
      <div>

        <h3>REVIEW YOUR FEEDBACK</h3>
        <h1>Feeling: {this.props.setFeeling} </h1>
        <h1>Understanding: {this.props.setUnderstanding}</h1>
        <h1>Support: {this.props.setSupport}</h1>
        <h1>Comments: {this.props.setComments}</h1>
        <footer>
          <button onClick={this.goBack}>Back</button>
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