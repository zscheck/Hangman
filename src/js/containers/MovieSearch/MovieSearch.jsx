import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  updateSearch
} from './MovieSearchAction';

export default class MovieSearch extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const { dispatch } = this.props;
    dispatch(updateSearch('value'));
  }

  render() {
    // const {  } = this.props;
    // const height = {
    //   height: '50vh'
    // };
    return (
      <div>
        <h1><span>H</span><span>A</span><span>N</span><span>G</span><span>M</span><span>A</span><span>N</span></h1>
      </div>
    );
  }
}
