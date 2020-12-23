import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Wrapper from '~/components/Wrapper';
import ListMovies from '~/components/ListMovies';
import Loading from '~/components/Loading';
import Header from '~/components/Header';
import ErrorMessage from '~/components/ErrorMessage';

import api from '~/services/api';

import { Container } from './styles';

const Home = ({ location }) => {
  const urlParam = new URLSearchParams(location.search);
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(urlParam.get('query'));
  const [error, setError] = useState(false);

  const fetchMovies = async () => {
    try {
      const payload = { params: { sort_by: 'popularity.desc' } };
      const res = await api.get('discover/movie', payload);
      setMovies({ type: 'load', movies: res.data.results });
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const fetchSearchMovie = async (query) => {
    setLoading(true);
    try {
      const payload = { params: { query } };
      const res = await api.get('search/movie', payload);
      setMovies({ type: 'search', movies: res.data.results });
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      fetchSearchMovie(search);
    } else {
      fetchMovies();
    }
  }, [search]);

  const MoviesResult = () => {
    if (error) return <ErrorMessage />;

    return <ListMovies {...movies} />;
  };

  return (
    <Container>
      <Header
        onSearch={(el) => fetchSearchMovie(el)}
        onClear={() => fetchMovies()}
        search={search}
      />
      <Wrapper>{loading ? <Loading /> : <MoviesResult />}</Wrapper>
    </Container>
  );
};

export default Home;

Home.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Home.defaultProps = {
  location: '',
};
