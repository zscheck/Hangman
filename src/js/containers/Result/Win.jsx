import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { backHome } from './ResultAction';

export default class Win extends Component {
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
      <div className='pyro text-center text-white'>
        <div className='before' />
        <div className='after' />
        <h1>Congratulations!</h1>
        <h3>Way to be AWESOME!</h3>
        <h1>The word was<span className='text-success'>{' ' + word}</span></h1>        <Link to={ '/' }>
        <button className='btn btn-primary' onClick={ this.backHome }>Play Again?</button>
        </Link>
      </div>
    );
  }
}
