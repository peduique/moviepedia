import React from 'react';
import PropTypes from 'prop-types';

import { StarImage } from './styles';

const Star = ({ variant, size }) => {
  return (
    <StarImage
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
      variant={variant}
      size={size}
    >
      <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z" />
    </StarImage>
  );
};

export default Star;

Star.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.number,
};

Star.defaultProps = {
  variant: '',
  size: 24,
};
