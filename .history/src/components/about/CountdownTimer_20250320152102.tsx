'use client';
import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }:CountdownTimerProps) => {
  const calculateTimeLeft = React.useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
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
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="flex space-x-4 justify-start items-center p-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-white shadow-lg p-4 rounded-xl text-center w-20">
          <span className="text-2xl font-bold">{String(value).padStart(2, '0')}</span>
          <p className="text-sm text-gray-500">{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;