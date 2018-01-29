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
            <button type='button' className='btn btn-link' data-toggle='modal' data-target='.bd-example-modal-sm'>Small modal</button>

            <div className='modal fade bd-example-modal-sm' tabIndex='-1' role='dialog' aria-labelledby='mySmallModalLabel' aria-hidden='true'>
              <div className='modal-dialog modal-sm'>
                <div className='modal-content'>
                    ...
                </div>
              </div>
            </div>
          </span>
        </nav>
      );
    }
  }
}
