import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  newCount,
  updateGameboard,
  removeLetter,
  startGame,
  getSynonyms
} from './GameAction';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.selectLetter = this.selectLetter.bind(this);
    this.hint = this.hint.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(startGame());
  }

  hint() {
    const { dispatch, word } = this.props;
    dispatch(getSynonyms(word));
  }

  selectLetter(e) {
    const { dispatch, word, count, letters, gameboard } = this.props;
    const { id } = e.target;
    // console.log(1, e.target.title);
    if (!word.includes(id)) {
      dispatch(newCount(count));
    } else {
      dispatch(updateGameboard(gameboard, word, id));
    }
    dispatch(removeLetter(letters, e.target.title));
  }

  render() {
    const { word, letters, gameboard, count, gameStarting, hintUsed, synonyms, usedLetters } = this.props;
    if (count === 0 && gameStarting) {
      return <Redirect to='/youlose' />;
    }
    if (!gameboard.includes('__') && gameboard.length > 0) {
      return <Redirect to='/winner' />;
    }
    const pictureNumber = 6 - count;

    return (
      <div className='mx-auto text-center text-white'>
        <div>
          <h1>Good Luck</h1>
          {/* <Link to={ '/' }>
            <button type='button' className='btn btn-link text-center'>Back to Search Results</button>
          </Link> */}
          <br />
          <h1>{gameboard.join(' ')}</h1>
          <br />
        </div>
        <div className='row'>
          <div className='col-4'>
            { !hintUsed ?
              <button className='btn btn-warning' onClick={ this.hint }>Hint</button> :
              <div>
                <h1 className='text-primary'>Synonyms</h1>
                <h3 className='my-2 text-success'>{synonyms[0]}</h3>
                <h3 className='my-2 text-success'>{synonyms[1]}</h3>
              </div>
          }
          </div>
          <div className='mb-3 col-4'>
            <img src={ `./gallows/gallows${pictureNumber}.jpg` } alt={ `${count} misses left` } />
          </div>
          <div className='col-4'>
            <h3>Selected letters</h3>
            <div className='row'>
              {usedLetters.map(letter =>
                <div className='col-3'>
                  <h3 className='text-info'>{ letter }</h3>
                </div>
            )}
            </div>

          </div>
        </div>
        <div className='row'>
          {letters.map((letter, index) =>
            <div className='col-sm-2 col-md-2 col-lg-1 mx-auto my-2'>
              <button className='btn btn-large btn-info shake' onClick={ this.selectLetter } id={ letter } title={ index }>
                {letter}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
