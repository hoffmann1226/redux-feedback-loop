//import all the necessary things
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

//create reducers for Feeling, Understanding, Support, and Comments
const setFeeling = (state = [], action) => {
    if (action.type==='SET_FEELING'){
      return  [action.payload];
    }
    return state;
  }

  const setUnderstanding = (state = [], action) => {
    if (action.type==='SET_UNDERSTANDING'){
      return  [action.payload];
    }
    return state;
  }

  const setSupport = (state = [], action) => {
    if (action.type==='SET_SUPPORT'){
      return  [action.payload];
    }
    return state;
  }

  const setComments = (state = [], action) => {
    if (action.type==='SET_COMMENTS'){
      return  [action.payload];
    }
    return state;
  }


  
//store instance and combine reducers
const storeInstance = createStore(
    combineReducers({
      setFeeling,
      setUnderstanding,
      setSupport,
      setComments,
    }),
    applyMiddleware(logger)
  );

//necessary language to store for use in redux
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));