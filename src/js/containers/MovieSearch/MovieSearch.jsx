import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  updateSearch,
  saveSearch,
  addMovie,
  saveMovie,
  movieInfo
} from './MovieSearchAction';

const axios = require('axios');

export default class MovieSearch extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.repeatSearch = this.repeatSearch.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  getMovies() {
    const { dispatch, searchTerm, pastSearch } = this.props;
    const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=e216d3b6&type=movie`;

    axios.get(url)
    .then((result) => {
      const list = result.data;
      // console.log(list.Search);
      // console.log(list.Response);
      const newCache = {
        search: searchTerm.toLowerCase(),
        movies: list.Search
      };
      if (list.Response === 'True') {
        dispatch(saveSearch(newCache));
        dispatch(addMovie(list.Search));
      } else {
        alert('No Search Results');
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  repeatSearch(e) {
    const { dispatch, pastSearch } = this.props;
    const index = e.target.id;
    dispatch(addMovie(pastSearch[index].movies));
  }

  selectMovie(e) {
    const { dispatch, movieCache } = this.props;
    const index = movieCache.map(movie => movie.imdbID).indexOf(e.target.id);
    if (index !== -1) {
      dispatch(movieInfo(movieCache[index]));
    } else {
      const url = `https://www.omdbapi.com/?i=${e.target.id}&apikey=e216d3b6`;

      axios.get(url)
      .then((result) => {
        const movie = result.data;
        console.log(movie);
        dispatch(movieInfo(movie));
        dispatch(saveMovie(movie));
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  handleFocus() {
    document.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        this.getMovies();
      }
    });
  }

  handleSearch(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSearch(value));
  }

  render() {
    const { searchTerm, movieList, pastSearch } = this.props;
    const height = {
      height: '50vh'
    };
    return (
      <div className='w-75 mx-auto'>
        <h1 className='text-center'>Movie Finder</h1>
        <div className='input-group pt-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search Movie...'
            value={ searchTerm }
            onChange={ this.handleSearch }
            onFocus={ this.handleFocus }
          />
          <div className='input-group-btn'>
            <button
              className='btn btn-secondary'
              type='button'
              onClick={ this.getMovies }
            >
              Go!
            </button>
          </div>
        </div>
        <div className='mb-2'>
          {pastSearch.map((link, index) => <button key={ index } id={ index } type='button' onClick={ this.repeatSearch } className='btn btn-link'>{ link.search }</button>)}
        </div>
        <div className='row mx-0'>
          {movieList.map(movie =>
            <div key={ movie.imdbID } className='col-4 card border-secondary px-0'>
              { movie.Poster === 'N/A' ?
                <img
                  className='card-img-top'
                  style={ height }
                  src='https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png'
                  alt='placeholder'
                /> :
                <img
                  className='card-img-top'
                  style={ height }
                  src={ movie.Poster }
                  alt='placeholder'
                />
              }
              <div className='card-body text-center'>
                <div>
                  <h6>{ movie.Title }</h6>
                  <p>{ movie.Year }</p>
                </div>
                <hr />
                <Link to={ `/movie/${movie.imdbID}` }>
                  <button
                    id={ movie.imdbID }
                    onClick={ this.selectMovie }
                    className='btn btn-primary mx-auto'
                    type='button'
                  >
                    More information
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
