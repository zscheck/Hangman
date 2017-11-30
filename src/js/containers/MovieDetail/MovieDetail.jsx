import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movieInfo } = this.props;
    const styles = {
      backgroundColor: 'transparent',
      border: '0px'
    };
    return (
      <div className='w-75 mx-auto'>
        <h1 className='text-center'>Movie Finder</h1>
        <Link to={ '/' }>
          <button type='button' className='btn btn-link'>Go Back</button>
        </Link>
        <br />
        <div className='row'>
          <div className='col-5 card p-0 mx-3' style={ styles } >
            <img className='card-img' src={ movieInfo.Poster } alt='Poster' />
          </div>
          <div className='col-6 card px-0 border-info mx-3'>
            <div className='card-header alert-info text-info'>
              <strong>Movie Details</strong>
            </div>
            <div className='card-body pt-1'>
              <h4 className='card-title text-center'>{ movieInfo.Title }</h4>
              <div className='mx-auto text-center'>
                <span className='badge badge-pill badge-success mx-2'>Released { ` ${movieInfo.Year}` }</span>
                <span className='badge badge-pill badge-success mx-2'>{ movieInfo.Runtime }</span>
                <span className='badge badge-pill badge-success mx-2'>{ movieInfo.Genre }</span>
              </div>
              <p className='mb-0 mt-1'><strong>Director: </strong>{ movieInfo.Director }</p>
              <p className='my-0'><strong>Writer(s): </strong>{ movieInfo.Writer }</p>
              <p className='my-0'><strong>Actors: </strong>{ movieInfo.Actors }</p>
              <br />
              <p className='my-0'>{ movieInfo.Plot }</p>
              <br />
              <p className='my-0'><strong>Awards: </strong>{ movieInfo.Awards }</p>
              <br />
              <p className='my-0'><strong>Metascore: </strong>{ movieInfo.Metascore }/100</p>
              <p className='my-0'><strong>IMDB: </strong>{ movieInfo.imdbRating }</p>
              {/* <p><strong>{ movieInfo.Ratings[1].Source }: </strong>{ movieInfo.Ratings[1].Value }</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
