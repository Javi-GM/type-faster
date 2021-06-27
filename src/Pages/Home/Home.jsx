import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Atoms/Button/Button';
import styles from './Home.module.css';

const Home = () => {
  const history = useHistory();
  const enterToContent = () => {
    history.push('/playground');
  };

  return (
    <div className={styles.container}>
      <h1> A site where to learn type faster </h1>
      <Button onClick={enterToContent} variant="primary">
        Let's go!
      </Button>
    </div>
  );
};

Home.propTypes = {};

export default Home;
