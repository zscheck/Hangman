import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { backHome } from './ResultAction';

export default class Win extends Component {
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
      <div>
        <h1>Winner</h1>
        <h3>Way to be AWESOME!</h3>
        <Link to={ '/' }>
          <button onClick={this.backHome}>go back</button>
        </Link>
      </div>
    );
  }
}
