import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Feelings from './../Feelings/Feelings'
import Understanding from './../Understanding/Understanding'
import Support from './../Support/Support'
import Comments from './../Comments/Comments'
import Review from './../Review/Review'



class App extends Component {
render() {
  return (
    <Router>
       <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4><i>Don't forget it!</i></h4>
      </header>
      <br/>
        
        <Route exact path="/" component={Feelings}/>
        <Route exact path="/Understanding" component={Understanding}/>
        <Route exact path="/Support" component={Support}/>
        <Route exact path="/Comments" component={Comments}/>
        <Route exact path="/Review" component={Review}/>
        {/* <Route exact path="/Final" component={Final}/> */}
  
      </div>
    </Router>
  );
}
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(App);
