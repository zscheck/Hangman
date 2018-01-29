import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { backHome } from '../Result/ResultAction';
import { findUsers } from '../Landing/LandingAction';
import NavBar from '../NavBar/NavBarIndex';

export default class LeaderBoard extends Component {
  constructor(props) {
    super(props);

    this.backHome = this.backHome.bind(this);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(findUsers());
  }

  backHome() {
    const { dispatch } = this.props;
    dispatch(backHome());
  }

  render() {
    const { leaderBoard, username } = this.props;
    console.table(leaderBoard);
    return (
      <div className='text-center text-white'>
        <NavBar />
        <h1 className='hangman'>Leaderboard</h1>
        <div>
          <table className='table table-sm'>
            <thead>
              <tr>
                <th scope='col'>Standing</th>
                <th scope='col'>Username</th>
                <th scope='col'>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderBoard.map((leader, index) =>
                leader.username === username ?
                  <tr key={ index }>
                    <th className='text-success' scope='row'>{index + 1}</th>
                    <td className='text-success'>{leader.username}</td>
                    <td className='text-success'>{leader.totalPoints}</td>
                  </tr> :
                  <tr key={ index }>
                    <th scope='row'>{index + 1}</th>
                    <td>{leader.username}</td>
                    <td>{leader.totalPoints}</td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
        <Link to={ '/' }>
          <button className='btn btn-primary' onClick={ this.backHome }>Back Home</button>
        </Link>
      </div>
    );
  }
}
