import React, { useEffect, useState } from 'react';
import styles from './PlayGround.module.css';
import TemplateText from '../../Components/Molecules/TemplateText/TemplateText';
import { useTextController } from '../../Hooks/useTextController';

const textToWrite = `Texto de prueba`;

const PlayGround = (props) => {
  const [input, setInput] = useState('');

  const { letterIndex, evaluateLetter, result } =
    useTextController(textToWrite);
  const { error, receivedLetter } = result;

  const handleInputChange = ({ nativeEvent: { data }, target: { value } }) => {
    evaluateLetter(data);
  };

  useEffect(() => {
    console.log(result);
    setInput((prev) => (!error ? prev.concat(receivedLetter) : prev));
  }, [result, error, receivedLetter]);

  return (
    <div className={styles.container}>
      <TemplateText letterIndex={letterIndex}>{textToWrite}</TemplateText>
      <label htmlFor="input" aria-label="Input"></label>
      <input
        onChange={handleInputChange}
        value={input}
        type="text"
        name="input"
        id="input"
      />
    </div>
  );
};

PlayGround.propTypes = {};

export default PlayGround;
