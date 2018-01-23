import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { backHome } from './ResultAction';

export default class Lose extends Component {
  constructor(props) {
    super(props);

    this.backHome = this.backHome.bind(this);
  }

  backHome() {
    const {dispatch} = this.props;
    dispatch(backHome());  
  }

  render() {
    return (
      <div className='text-center'>
        <h1>Loser!!!!!</h1>
        <Link to={ '/' }>
          <button onClick={ this.backHome }>go back</button>
        </Link>
        <div>
          <img src='./gallows/gallows6.jpg' alt='Game Over' />
        </div>
      </div>
    );
  }
}
