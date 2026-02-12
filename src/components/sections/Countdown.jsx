import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ onComplete }) => {
    // Initialize timeLeft
    const [targetTime] = useState(() => new Date(Date.now() + 5000));
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetTime - now;

            if (difference <= 0) {
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0, completed: true });
                clearInterval(timer);
            } else {
                setTimeLeft({
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                    completed: false
                });
            }
        }, 100); // Check more frequently for smoothness

        return () => clearInterval(timer);
    }, [targetTime]);

    // Check completion
    useEffect(() => {
        if (timeLeft.completed) {
            onComplete();
        }
    }, [timeLeft.completed, onComplete]);

    function calculateTimeLeft() {
        return { hours: 0, minutes: 0, seconds: 5, completed: false };
    }

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
                    <TimeBox value={timeLeft.seconds} label="Seconds" />
                </div>

                <p className="mt-8 text-slate-400 animate-pulse">
                    Unlocking the surprise in a moment...
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
