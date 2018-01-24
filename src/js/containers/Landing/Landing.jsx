import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  startGame,
  beginner
} from './LandingAction';

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.beginner = this.beginner.bind(this);
    // this.moderate = this.moderate.bind(this);
    // this.hard = this.hard.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(startGame());
  }

  beginner(e) {
    const { dispatch } = this.props;
    dispatch(beginner(e.target.value));
  }

  render() {
    return (
      <div className='text-center text-white'>
        <h1 className='hangman'>
          <span className='h'> H </span>
          <span className='a'> A </span>
          <span className='n'> N </span>
          <span className='g'> G </span>
          <span className='m'> M </span>
          <span className='a'> A </span>
          <span className='n'> N </span>
        </h1>
        <h3>Let's play a game...</h3>
        <div className='mb-3'>
          <img src='./gallows/gallows6.jpg' alt='Hangman' />
        </div>
        <h3>Select your difficulty</h3>
        <div className='row'>
          <div className='col-4'>
            <h5>Choose this if you're a wimp</h5>
            <Link to={ '/play' }>
              <button className='btn btn-success' value={ 6 } onClick={ this.beginner }>Beginner</button>
            </Link>
          </div>
          <div className='col-4'>
            <h5>Ok, you have some skills</h5>
            <Link to={ '/play' }>
              <button className='btn btn-primary' value={ 5 } onClick={ this.beginner }>Moderate</button>
            </Link>
          </div>
          <div className='col-4'>
            <h5>You like to live dangerously</h5>
            <Link to={ '/play' }>
              <button className='btn btn-danger' value={ 3 } onClick={ this.beginner }>Hard</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
