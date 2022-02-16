import React from 'react';

import './component.css';

const LandingPage = ({ text = '' }) => {
  const [textLetters, setTextLetters] = React.useState([]),
    animationClasses = [
      'balace-animation',
      'shrink-jump-animation',
      'falling-animation',
      'rotate-animation',
      'top-long-animation',
    ];

  React.useEffect(() => {
    const textArray = text.split(''),
      animatedText = textArray.map((el, i) => ({
        letter: el,
        animationDelay: `${i * 250}ms`,
      }));

    setTextLetters(animatedText);
  }, [text]);

  const generateRandomNumber = () =>
    Math.floor(Math.random() * animationClasses.length);

  return (
    <div className="word">
      {textLetters.map(({ letter, animationDelay, isClicked }, index) => (
        <span
          className={animationClasses[generateRandomNumber()]}
          style={{ animationDelay }}
          key={index}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default LandingPage;
