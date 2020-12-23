import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Star from '~/components/Star';

import { Container } from './styles';

const Rating = ({ length, onRate, clear }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleHover = (value) => {
    setHoverRating(value);
  };

  const handleRate = (value) => {
    const rate = value === rating ? 0 : value;

    setRating(rate);
    onRate(rate);
  };

  useEffect(() => {
    setRating(0);
  }, [clear]);

  return (
    <>
      {[...Array(length).keys()].map((i) => {
        const value = (i + 1) * 2;
        const activeColor = value <= (hoverRating > 0 ? hoverRating : rating);

        return (
          <Container
            key={value}
            value={value}
            onMouseEnter={() => handleHover(value)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleRate(value)}
          >
            <Star variant={activeColor ? 'active' : ''} />
          </Container>
        );
      })}
    </>
  );
};

export default Rating;

Rating.propTypes = {
  length: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
  clear: PropTypes.bool,
};

Rating.defaultProps = {
  clear: false,
};
