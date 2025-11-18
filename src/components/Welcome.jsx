import React, { useState, useEffect } from 'react';
import './Welcome.css';
import Arrow from './Arrow';

const Welcome = () => {
  const [part, setPart] = useState('');
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 6;
  const speed = 60;

  useEffect(() => {
    const words = ['Hello.', 'Welcome to my page.'];

    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((i + 1) % words.length);
          setOffset(0);
        }
      }
      const currentPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          setOffset(offset + 1);
        } else {
          setOffset(offset - 1);
        }
      }
      setPart(currentPart);
    }, speed);

    return () => clearInterval(interval);
  }, [i, offset, forwards, skipCount]);

  return (
    <>
      <div className="welcome-container" id="top">
        <div className="welcome-text">
          <h1>{part}</h1>
        </div>
      </div>
      <div className="welcome-arrow">
        <Arrow nextComponent={'bio1'} />
      </div>
    </>
  );
};

export default Welcome;
