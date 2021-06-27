import { useEffect, useState } from 'react';

export const useTextController = (referenceText = '') => {
  const [letterData, setCurrentLetter] = useState({
    letterIndex: 1,
    currentLetter: referenceText.charAt(0),
  });

  const [result, setResult] = useState({
    error: true,
    expectedLetter: referenceText.charAt(0),
    receivedLetter: '',
  });

  const { letterIndex, currentLetter } = letterData;

  const next = () => {
    setCurrentLetter((state) => ({
      ...state,
      letterIndex: state.letterIndex + 1,
      currentLetter: referenceText.charAt(state.letterIndex),
    }));
  };

  const match = (letter) => currentLetter === letter;

  const evaluateLetter = (letter) => {
    const matched = match(letter);
    const expectedLetter = currentLetter;
    if (matched) {
      next();
    }
    setResult({ expectedLetter, error: !matched, receivedLetter: letter });
  };

  return {
    letterIndex,
    result,
    evaluateLetter,
  };
};
