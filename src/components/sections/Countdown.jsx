import React, { useState, useEffect } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ onComplete }) => {
    // Use useRef to store the target end time, so it's initialized only once on mount
    const targetEndTimeRef = useRef(null);

    // Initialize timeLeft with a calculation that sets the target time
    const [timeLeft, setTimeLeft] = useState(() => {
        const now = Date.now();
        targetEndTimeRef.current = now + 10 * 1000; // 10 seconds from now
        return calculateTimeLeft(targetEndTimeRef.current);
    });

    function calculateTimeLeft(targetTime) {
        const now = Date.now();
        const difference = targetTime - now;

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
            // Pass the consistent targetEndTimeRef.current to calculateTimeLeft
            const remaining = calculateTimeLeft(targetEndTimeRef.current);
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
