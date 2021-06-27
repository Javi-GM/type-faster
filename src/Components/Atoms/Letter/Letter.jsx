import React from 'react';
import PropTypes from 'prop-types';
import styles from './Letter.module.css';

const Space = () => {
  return <div style={{ width: '8.8px' }}></div>;
};

const Letter = ({ children, alreadyTyped }) => {
  console.log(!!children);
  return (
    <div className={`${alreadyTyped && styles.alreadyTyped}`}>
      {children !== ' ' ? children : <Space></Space>}
    </div>
  );
};

Letter.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Letter;
