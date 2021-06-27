import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', ...other }) => {
  return (
    <button
      className={`${styles.btn} ${variant === 'primary' && styles.primary}`}
      {...other}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'default']),
};

export default Button;
