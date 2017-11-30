export function addMovie(movie) {
  return {
    type: 'ADD_MOVIE',
    payload: movie
  };
}

export function movieInfo(movie) {
  return {
    type: 'MOVIE_INFO',
    payload: movie
  };
}

export function updateSearch(searchTerm) {
  return {
    type: 'UPDATE_SEARCH',
    payload: { searchTerm }
  };
}

export function saveSearch(search) {
  return {
    type: 'SAVE_SEARCH',
    payload: search
  };
}

export function saveMovie(movie) {
  return {
    type: 'SAVE_MOVIE',
    payload: movie
  };
}
