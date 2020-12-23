import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getYear from 'date-fns/getYear';
import { useHistory } from 'react-router-dom';

import Wrapper from '~/components/Wrapper';
import Loading from '~/components/Loading';
import Star from '~/components/Star';
import notification from '~/components/Notification';

import api from '~/services/api';
import { baseImg } from '~/utils/helper';

import {
  Container,
  FeaturedImage,
  Content,
  Title,
  Tagline,
  Overview,
  Rating,
  Info,
} from './styles';

const Movies = ({ match }) => {
  const history = useHistory();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const movie_id = match.params.id;

  const fetchMovie = async () => {
    try {
      const res = await api.get(`movie/${movie_id}`);
      setMovie(res.data);
      setLoading(false);
    } catch (error) {
      notification('No movies found', 'error');
      history.push('/');
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Container>
        <FeaturedImage
          src={`${baseImg}/w400${movie.poster_path}`}
          alt={movie.title}
        />
        <Content>
          <Title>
            {movie.title} ({getYear(new Date(movie.release_date))})
          </Title>
          <Tagline>{movie.tagline}</Tagline>
          <Rating>
            <Star variant="active" size={25} /> {movie.vote_average}
          </Rating>
          <Overview>{movie.overview}</Overview>

          <Info data-title="Genres">
            {movie.genres.map((g) => g.name).join(', ')}
          </Info>

          <Info data-title="Status">{movie.status}</Info>

          <Info data-title="Budget">
            {new Intl.NumberFormat().format(movie.budget)}
          </Info>

          <Info data-title="Production companies">
            {movie.production_companies.map((p) => p.name).join(', ')}
          </Info>

          <Info data-title="Homepage">{movie.homepage}</Info>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Movies;

Movies.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
