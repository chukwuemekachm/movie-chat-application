import React, { createContext, useState } from 'react';

export const MovieContext = createContext({
  movies: [],
});

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  function createContextValue() {
    return {
      movies,
    };
  }

  return (
    <MovieContext.Provider value={createContextValue()}>
      {children}
    </MovieContext.Provider>
  );
}
