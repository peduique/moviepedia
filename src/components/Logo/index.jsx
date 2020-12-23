import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '~/assets/images/logotipo.png';

const Logo = ({ className }) => {
  return (
    <Link to="/" className={className}>
      <img src={logo} alt="Logo MoviePedia" />
    </Link>
  );
};

export default Logo;

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};
