import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Movie from '~/components/MovieCard';
import Rating from '~/components/Rating';

import { Container, List, Title, Filter, Label } from './styles';

const ListMovies = ({ type, movies }) => {
  const [listMovies, setListMovies] = useState(movies);
  const [clearRating, setClearRating] = useState(false);

  const handleOnRate = (value) => {
    setClearRating(false);

    if (value) {
      const getMovies = movies.filter(
        (m) => m.vote_average >= value - 2 && m.vote_average <= value
      );
      setListMovies(getMovies);
    } else {
      setListMovies(movies);
    }
  };

  useEffect(() => {
    setListMovies(movies);
    setClearRating(true);
  }, [type, movies]);

  return (
    <Container>
      <Title>{type === 'search' ? 'Search results' : 'Popular movies'}</Title>

      {!!movies.length && (
        <Filter>
          <Label>Filter by rating:</Label>
          <Rating length={5} onRate={handleOnRate} clear={clearRating} />
        </Filter>
      )}

      {listMovies.length ? (
        <>
          <List>
            {listMovies.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </List>
        </>
      ) : (
        <p>No movies found</p>
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
