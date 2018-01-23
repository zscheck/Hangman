import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { backHome } from './ResultAction';

export default class Lose extends Component {
  constructor(props) {
    super(props);

    this.backHome = this.backHome.bind(this);
  }

  backHome() {
    const { dispatch } = this.props;
    dispatch(backHome());
  }

  render() {
    const { word } = this.props;
    return (
      <div className='text-center text-white'>
        <h1>You Suck!!!!!</h1>
        <h1>The word was<span className='text-danger'>{' ' + word}</span></h1>
        <div className='mb-3'>
          <img src='./gallows/gallows6.jpg' alt='Game Over' />
        </div>
        <Link to={ '/' }>
          <button className='btn btn-primary' onClick={ this.backHome }>Play Again?</button>
        </Link>
      </div>
    );
  }
}
