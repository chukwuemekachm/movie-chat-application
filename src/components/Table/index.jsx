import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import Filter from './Filter';
import { withContext } from '../../hocs/Provider';
import NavBar from './NavBar';
import Header from './Header';

function Table(props) {
  const { context: { _movie: { movies, searchMovieByTitle, filterMoviesByGenre } } } = props;

  return (
    <>
      <NavBar />
      <Table.Wrapper>
        <Header />
        <Filter searchMovie={searchMovieByTitle} filterMovies={filterMoviesByGenre} />
        <div className="table-display">
          {movies.map(movie => <Row {...movie} key={`${movie.title}-${movie.rating}`} />)}
        </div>
      </Table.Wrapper>
    </>
  );
}

Table.Wrapper = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-top: 2em;

  @media (max-width: 1024px) {
    padding: 0;
  }

  .table-display {
    height: calc(100vh - 200px);
    overflow-y: auto;

    @media (max-width: 1024px) {
      width: 90%;
      overflow-x: scroll;
    }
  }
`;

export default withContext(Table);
