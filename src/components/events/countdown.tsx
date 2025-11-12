'use client';

import { useState, useEffect } from 'react';

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center rounded-lg bg-card p-4 shadow-lg w-24">
    <div className="font-headline text-4xl md:text-6xl font-black text-primary neon-primary">{String(value).padStart(2, '0')}</div>
    <div className="text-sm md:text-base font-medium text-muted-foreground mt-1">{label}</div>
  </div>
);

export function FeaturedEventCountdown() {
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 30);
    setTargetDate(futureDate);
  }, []);

  useEffect(() => {
    if (!targetDate) return;

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2">Próximo Evento: Sextou Reverso</h2>
      <p className="text-lg text-muted-foreground mb-8">A contagem regressiva começou. Não perca a festa do ano!</p>
      <div className="flex justify-center gap-4 md:gap-8">
        {timeLeft ? (
          <>
            <CountdownItem value={timeLeft.days} label="Dias" />
            <CountdownItem value={timeLeft.hours} label="Horas" />
            <CountdownItem value={timeLeft.minutes} label="Minutos" />
            <CountdownItem value={timeLeft.seconds} label="Segundos" />
          </>
        ) : (
          <>
            <CountdownItem value={0} label="Dias" />
            <CountdownItem value={0} label="Horas" />
            <CountdownItem value={0} label="Minutos" />
            <CountdownItem value={0} label="Segundos" />
          </>
        )}
      </div>
    </div>
  );
}
