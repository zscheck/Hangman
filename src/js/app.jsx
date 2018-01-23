import React, { Component } from 'react';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import Landing from './containers/Landing/index';
import Game from './containers/Game/index';
import Lose from './containers/Result/LoseIndex';
import Win from './containers/Result/WinIndex';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={ Landing } />
          <Route path='/play' component={ Game } />
          <Route path='/youlose' component={ Lose } />
          <Route path='/winner' component={ Win } />
        </div>
      </Router>
    );
  }
}
