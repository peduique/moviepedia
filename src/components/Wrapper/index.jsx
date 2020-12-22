import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
