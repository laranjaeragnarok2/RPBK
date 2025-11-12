'use client';

import { useState, useEffect } from 'react';

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

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

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center rounded-lg bg-card p-4 shadow-lg w-24">
    <div className="font-headline text-4xl md:text-6xl font-black text-primary neon-primary">{String(value).padStart(2, '0')}</div>
    <div className="text-sm md:text-base font-medium text-muted-foreground mt-1">{label}</div>
  </div>
);

export function FeaturedEventCountdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2">Featured Event: NEON DREAMS</h2>
      <p className="text-lg text-muted-foreground mb-8">The countdown has begun. Don't miss the party of the year!</p>
      <div className="flex justify-center gap-4 md:gap-8">
        <CountdownItem value={timeLeft.days} label="Days" />
        <CountdownItem value={timeLeft.hours} label="Hours" />
        <CountdownItem value={timeLeft.minutes} label="Minutes" />
        <CountdownItem value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
