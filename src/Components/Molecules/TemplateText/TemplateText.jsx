import React from 'react';
import Letter from '../../Atoms/Letter/Letter';
import styles from './TemplateText.module.css';

const TemplateText = React.memo(({ children, letterIndex }) => {
  return (
    <>
      <div className={styles.templateText}>
        {[...children].map((letter, index) => {
          return (
            <Letter key={index} alreadyTyped={index + 1 < letterIndex}>
              {letter}
            </Letter>
          );
        })}
      </div>
    </>
  );
});

TemplateText.propTypes = {};

export default TemplateText;
