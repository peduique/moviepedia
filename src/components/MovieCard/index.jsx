import React from 'react';
import PropTypes from 'prop-types';

import { baseImg, placeholderMovieImg } from '~/utils/helper';
import Star from '~/components/Star';

import { Container, Image, Title, Rating } from './styles';

const MovieCard = ({ id, original_title, poster_path, vote_average }) => {
  return (
    <Container to={`/movies/${id}`}>
      <Image
        src={`${baseImg}/w200${poster_path}`}
        alt={original_title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholderMovieImg;
        }}
      />

      <Title>{original_title}</Title>
      <Rating>
        <Star variant="active" size={16} /> {vote_average}
      </Rating>
    </Container>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  original_title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};
