import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        // Target: Next 12:00 AM IST
        const now = new Date();

        // Convert current time to IST
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const istOffset = 5.5 * 60 * 60 * 1000;
        const istNow = new Date(utc + istOffset);

        const target = new Date(istNow);
        target.setHours(24, 0, 0, 0); // Set to next midnight (12:00 AM)

        const difference = target - istNow;

        if (difference <= 0) {
            return { hours: 0, minutes: 0, seconds: 0, completed: true };
        }

        return {
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            completed: false
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = calculateTimeLeft();
            setTimeLeft(remaining);

            if (remaining.completed) {
                clearInterval(timer);
                onComplete();
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-3xl md:text-5xl font-display mb-8 text-rose-300">
                    Wait for the Magic...
                </h1>

                <div className="flex gap-4 md:gap-8 justify-center">
                    <TimeBox value={timeLeft.hours} label="Hours" />
                    <TimeBox value={timeLeft.minutes} label="Mins" />
                    <TimeBox value={timeLeft.seconds} label="Secs" />
                </div>

                <p className="mt-8 text-slate-400 animate-pulse">
                    
                </p>
            </motion.div>
        </div>
    );
};

const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <div className="bg-slate-800 p-4 md:p-6 rounded-xl border border-slate-700 shadow-2xl w-20 md:w-32">
            <span className="text-3xl md:text-5xl font-bold font-mono text-white">
                {String(value).padStart(2, '0')}
            </span>
        </div>
        <span className="mt-2 text-sm text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
);

export default Countdown;
