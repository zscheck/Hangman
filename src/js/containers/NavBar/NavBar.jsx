import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { username, userPoints } = this.props;
    console.log(username, userPoints);
    if (username != '') {
      return (
        <nav className='navbar fixed-top navbar-expand-lg justify-content-between'>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
              <Link to={ '/leaderboard' }>
                <li className='nav-item'>
                  <a className='nav-link text-white' href='#'>Leaderboard</a>
                </li>
              </Link>
              <li className='nav-item'>
                <a className='nav-link text-white' href='#'>Stats</a>
              </li>
            </ul>
          </div>
          <span className='navbar-text'>
            {`Welcome ${username}!  Points: `}<span className='text-success'>{userPoints}</span>
          </span>
          {/* <div>
            <a className='navbar-brand' href='#'>
              <img src='' width='30' height='30' className='d-inline-block align-top' alt='Built By:' />
              Zachary Scheck
            </a>
          </div> */}
        </nav>
      );
    } else {
      return (
        <nav className='navbar fixed-top navbar-expand-lg justify-content-between'>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
              <Link to={ '/leaderboard' }>
                <li className='nav-item'>
                  <a className='nav-link text-white' href='#'>Leaderboard</a>
                </li>
              </Link>
              <li className='nav-item'>
                <a className='nav-link text-white' href='#'>Stats</a>
              </li>
            </ul>
          </div>
          <span>
            
          </span>
        </nav>
      );
    }
  }
}
