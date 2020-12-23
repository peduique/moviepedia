import React, { useState, useEffect } from 'react';

import Wrapper from '~/components/Wrapper';
import InputSearch from '~/components/InputSearch';
import ListMovies from '~/components/ListMovies';
import Loading from '~/components/Loading';

import api from '~/services/api';

import { Container, Header, Logo } from './styles';

const Home = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const payload = { params: { sort_by: 'popularity.desc' } };
      const res = await api.get('discover/movie', payload);
      setMovies({ type: 'load', movies: res.data.results });
      setLoading(false);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchSearchMovie = async (query) => {
    setLoading(true);
    try {
      const payload = { params: { query } };
      const res = await api.get('search/movie', payload);
      setMovies({ type: 'search', movies: res.data.results });
      setLoading(false);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Container>
      <Header>
        <Wrapper>
          <Logo />
          <InputSearch
            onSearch={(el) => fetchSearchMovie(el)}
            onClear={() => fetchMovies()}
          />
        </Wrapper>
      </Header>

      <Wrapper>{loading ? <Loading /> : <ListMovies {...movies} />}</Wrapper>
    </Container>
  );
};

export default Home;
