import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ onComplete }) => {
    // Initialize timeLeft
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Check completion
    useEffect(() => {
        if (timeLeft.completed) {
            onComplete();
        }
    }, [timeLeft, onComplete]);

    function calculateTimeLeft() {
        const now = new Date();

        // Convert to IST (UTC + 5:30)
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const istOffset = 5.5 * 60 * 60 * 1000;
        const istNow = new Date(utc + istOffset);

        // Target: Next Midnight (12:00 AM) in IST
        const target = new Date(istNow);
        target.setHours(24, 0, 0, 0);

        // If it's already past 12 AM (e.g., 12:01 AM), targeting "24:00" of today implies tomorrow's midnight. 
        // But logic: if currently 11 PM, target is 12 AM (1 hour later).
        // If currently 12:01 AM, target set to 24:00 is next day? 
        // Actually, if I want to unlock *at* 12 AM, and it is *past* 12 AM, I should just unlock.
        // But "Wait for 12 AM" usually implies waiting for the *birthday* midnight. 
        // If today is the bday, it should be open. 
        // Assuming the user wants to gate it until the *next* occurrence if it's before, or open if it's after?
        // Actually, usually these logic check: is NOW < Target Date?
        // Since I don't have a specific *date*, just "12 AM", I will assume "Next Midnight".
        // WAIT. If the user visits on 12:05 AM, they shouldn't wait 24 hours.
        // Logic: 
        // If time is between 00:00 and say 06:00, assume it's "the day" and open?
        // OR simpler: Just target specific Date? The user said "12am".
        // Let's stick to: Count down to the *very next* 12 AM. 
        // If the user wants to test it, they'll see hours remaining.
        // If it is 11:55 PM, it shows 5 mins.
        // If it is 12:01 AM, "next 12am" is 24 hours away. That might be bad if they just missed it.
        // Better logic for a B-day site:
        // Set a SPECIFIC DATE/TIME TARGET. 
        // Since I don't know the exact date, I'll use "Next Midnight" but typically you'd want to check if `now` is on the birthday.
        // I will use the previous logic which was "Next Midnight".
        // BUT, I'll add a check: if it's between 12 AM and 4 AM, maybe consider it "done"?
        // No, simplest component logic: Count to next midnight. 
        // If the user wants to open it *now* they can remove the component.
        // I will interpret "make countdown at 12am" as "Target next 00:00:00 IST".

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
                    Unlocking at 12:00 AM IST...
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
