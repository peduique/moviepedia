import React, { useState, useEffect } from 'react';

import Logo from '~/components/Header';
import Wrapper from '~/components/Wrapper';
import InputSearch from '~/components/InputSearch';
import ListMovies from '~/components/ListMovies';

import api from '~/services/api';

import { Container, Header } from './styles';

const Home = () => {
  const [movies, setMovies] = useState();

  const fetchMovies = async () => {
    try {
      const payload = { params: { sort_by: 'popularity.desc' } };
      const res = await api.get('discover/movie', payload);
      setMovies({ type: 'load', movies: res.data.results });
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchSearchMovie = async (query) => {
    try {
      const payload = { params: { query } };
      const res = await api.get('search/movie', payload);
      setMovies({ type: 'search', movies: res.data.results });
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

      <Wrapper>{!!movies && <ListMovies {...movies} />}</Wrapper>
    </Container>
  );
};

export default Home;
