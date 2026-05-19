import React, { useState, useEffect } from 'react';
import { PRESALE_CONFIG } from '../config/tokens';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const startTime = PRESALE_CONFIG.startTime;
      const difference = startTime - now;

      if (difference <= 0) {
        setIsLive(true);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsLive(false);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Glassmorphic Container */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        {/* Radial Glow Background */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 opacity-50" />
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-2">
            {isLive ? '🚀 PRESALE LIVE NOW!' : 'Presale Launches In'}
          </h2>
          <p className="text-white/60 mb-6">Tuesday, May 20 at 9:30 PM</p>

          {!isLive ? (
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-orange-400 font-mono">
                  {String(timeRemaining.days).padStart(2, '0')}
                </div>
                <div className="text-xs text-white/60 mt-2 uppercase tracking-wider">Days</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 font-mono">
                  {String(timeRemaining.hours).padStart(2, '0')}
                </div>
                <div className="text-xs text-white/60 mt-2 uppercase tracking-wider">Hours</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 font-mono">
                  {String(timeRemaining.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs text-white/60 mt-2 uppercase tracking-wider">Minutes</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/30 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-pink-400 font-mono">
                  {String(timeRemaining.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs text-white/60 mt-2 uppercase tracking-wider">Seconds</div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-500/5 border border-orange-500/50 rounded-lg p-6 text-center backdrop-blur-sm">
              <p className="text-lg text-orange-300 font-semibold">
                Join the presale now and secure your allocation!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
