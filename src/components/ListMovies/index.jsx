import React from 'react';
import PropTypes from 'prop-types';

import Movie from '~/components/MovieCard';

import { Container, List, Title } from './styles';

const ListMovies = ({ type, movies }) => {
  return (
    <Container>
      <Title>{type === 'search' ? 'Search results' : 'Popular movies'}</Title>
      {movies.length ? (
        <List>
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </List>
      ) : (
        <p>No results found</p>
      )}
    </Container>
  );
};

export default ListMovies;

ListMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired,
};

ListMovies.defaultProps = {
  movies: [],
};
