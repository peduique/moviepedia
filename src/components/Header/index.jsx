import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from '~/components/Wrapper';
import InputSearch from '~/components/InputSearch';

import { Container, Logo } from './styles';

const Header = ({ backdrop, ...rest }) => {
  return (
    <Container backdrop={backdrop}>
      <Wrapper>
        <Logo />
        <InputSearch {...rest} />
      </Wrapper>
    </Container>
  );
};

export default Header;

Header.propTypes = {
  backdrop: PropTypes.string,
};

Header.defaultProps = {
  backdrop: '',
};
