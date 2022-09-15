import React, { useEffect, useState } from 'react';
import './component.css';

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`10/31/${year}`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const ComingSoonPage = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <div className="countdown-container">
      <h1 className="title">
        <span className="fade fade-one">COMING</span>
        <span className="fade fade-two">SOON</span>
      </h1>
      <h1 className="countdown fade fade-three">
        <p>
          {days}
          <span>D</span>
        </p>
        <p>
          {hours}
          <span>H</span>
        </p>
        <p>
          {minutes}
          <span>M</span>
        </p>
        <p>
          {seconds}
          <span>S</span>
        </p>
      </h1>
    </div>
  );
};

export default ComingSoonPage;
