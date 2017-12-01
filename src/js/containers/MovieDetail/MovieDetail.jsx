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
    const background = {
      backgroundImage: "url('http://www.kernelpopcorn.com/wp-content/uploads/2012/10/background-1024x668.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    return (
      <div className='w-75 mx-auto'>
        <div className='text-center'>
          <h1>{ movieInfo.Title}</h1>
          <Link to={ '/' }>
            <button type='button' className='btn btn-link text-center'>Back to Search Results</button>
          </Link>
          <br />
        </div>
        <div className='row' style={ background }>
          <div className='col-3' />
          <div className='col-6 card p-0' style={ styles } >
            { movieInfo.Poster === 'N/A' ?
              <img
                className='card-img'
                src='https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png'
                alt='placeholder'
              /> :
              <img
                className='card-img'
                src={ movieInfo.Poster }
                alt='placeholder'
              />
              }
          </div>
          <div className='col-3' />
        </div>
        <div className='row'>
          <div className='col-12 card px-0 border-info mt-3'>
            <div className='card-header alert-info text-info'>
              <strong>Movie Details</strong>
            </div>
            <div className='card-body pt-1'>
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
