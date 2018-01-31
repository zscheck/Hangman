import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  startGame,
  beginner,
  findUsers,
  signup,
  login
} from './LandingAction';
import NavBar from '../NavBar/NavBarIndex';

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.beginner = this.beginner.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    // this.find = this.find.bind(this);
    // this.moderate = this.moderate.bind(this);
    // this.hard = this.hard.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(startGame());
    // dispatch(findUsers());
  }

  setDisplayTitle(title) {
    // Create an object container to store randomized delays
    const setDelayProps = {};
    for (const charIndex in title.split('')) {
      // Check if setDelayProps already already exists
      if (setDelayProps[title[charIndex]] == undefined) {
        setDelayProps[title[charIndex]] = charIndex * 200 + 500;
      }
    }

    // Map out title for rendering
    return title.split('').map((letter, index) => (
      <span
        key={ `${letter}-${index}` }
        className='animate popIn px-1'
        style={ { animationDelay: `${setDelayProps[letter]}ms` } }
      >
        {letter}
      </span>
    ));
  }

  beginner(e) {
    const { dispatch } = this.props;
    dispatch(beginner(e.target.value));
  }

  signup() {
    const { dispatch } = this.props;
    dispatch(signup());
  }

  login() {
    const { dispatch } = this.props;
    dispatch(login());
  }

  // find() {
  //   const { dispatch } = this.props;
  //   dispatch(findUsers());
  // }

  render() {
    const { leaderBoard, username, userPoints } = this.props;
    console.log(99, leaderBoard, username, userPoints);
    return (
      <div className='text-center text-white'>
        <NavBar />
        <h1 className='hangman'>
          {
          // Map out title + set delays on a separate method
          this.setDisplayTitle('HANGMAN')
        }
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
        <button onClick={ this.signup }>Sign Up</button>
        <button onClick={ this.login }>Log in</button>
      </div>
    );
  }
}
