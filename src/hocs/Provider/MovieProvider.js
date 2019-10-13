import React, { createContext, useState } from 'react';
import _movies from '../../movies.data';

export const MovieContext = createContext({
  movies: [],
});

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState(_movies);
  const [movieGenre, setMovieGenre] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  function filterMovies(filterGenre, filterTitle) {
    return filterGenre !== 'All'
      ? _movies.filter(
        movie => movie.title.toLowerCase().includes(filterTitle.toLowerCase()) && movie.genre.includes(filterGenre)
      )
      : _movies.filter(movie => movie.title.toLowerCase().includes(filterTitle.toLowerCase()));
  }

  function searchMovieByTitle(title) {
    if (!title.length) return filterMovies(movieGenre, '');

    const filteredMovies = filterMovies(movieGenre, title);
    setSearchTerm(title);
    setMovies(filteredMovies);
  }

  function filterMoviesByGenre(genre) {
    let filteredMovies;

    if (searchTerm.length) {
      filteredMovies = filterMovies(genre, searchTerm);
    } else {
      filteredMovies = _movies.filter(movie => movie.genre.includes(genre));
    }

    setMovieGenre(genre);
    setMovies(filteredMovies);
  }

  function createContextValue() {
    return {
      movies,
      searchMovieByTitle,
      filterMoviesByGenre,
    };
  }

  return (
    <MovieContext.Provider value={createContextValue()}>
      {children}
    </MovieContext.Provider>
  );
}
