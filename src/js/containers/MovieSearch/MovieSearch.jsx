import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  beginner,
  moderate,
  hard
} from './MovieSearchAction';

export default class MovieSearch extends Component {
  constructor(props) {
    super(props);

    this.beginner = this.beginner.bind(this);
    this.moderate = this.moderate.bind(this);
    this.hard = this.hard.bind(this);
  }

  beginner() {
    const { dispatch } = this.props;
    dispatch(beginner('value'));
  }

  moderate() {
    const { dispatch } = this.props;
    dispatch(moderate('value'));
  }

  hard() {
    const { dispatch } = this.props;
    dispatch(hard('value'));
  }

  render() {
    // const {  } = this.props;
    // const height = {
    //   height: '50vh'
    // };
    return (
      <div className='text-center'>
        <h1><span> H </span><span>  A </span><span>  N </span><span>  G </span><span >  M </span><span >  A </span><span>  N </span></h1>
        <h3>Let's play a game...</h3>
        <img src='./gallows/gallows6.jpg' alt='Hangman' />
        <h3>Select your difficulty</h3>
        <div className='row'>
          <div className='col-4'>
            <h5>Choose this if you're a wimp</h5>
            <button className='btn btn-success' onClick={ this.beginner }>Beginner</button>
          </div>
          <div className='col-4'>
            <h5>Ok, you have some skills</h5>
            <button className='btn btn-primary' onClick={ this.moderate }>Moderate</button>
          </div>
          <div className='col-4'>
            <h5>You like to live dangerously</h5>
            <button className='btn btn-danger' onClick={ this.hard }>Hard</button>
          </div>
        </div>
      </div>
    );
  }
}
