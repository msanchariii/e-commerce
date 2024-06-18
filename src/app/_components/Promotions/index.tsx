'use client';
import classes from './index.module.scss';
import React, { useEffect, useState } from 'react';

const Promotion = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // TODO:

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0);

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (timeDifference === 0) {
        clearInterval(timerInterval);
        // You can add code here to handle what happens when the target date is reached.
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval); // Cleanup the interval when the component unmounts.
    };
  }, []);

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>Get Ready for a shopping experience like never before </p>
        <ul className={classes.stats}>
          <StatBox label={'Days'} value={countdown.days} />
          <StatBox label={'Hours'} value={countdown.hours} />
          <StatBox label={'Mins'} value={countdown.minutes} />
          <StatBox label={'Secs'} value={countdown.seconds} />
        </ul>
      </div>
    </section>
  );
};

const StatBox = ({ label, value }: { label: string; value: number }) => {
  return (
    <li className={classes.statBox}>
      <h4>{value}</h4>
      <p>{label}</p>
    </li>
  );
};

export default Promotion;
