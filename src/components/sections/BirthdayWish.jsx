import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import confetti from 'canvas-confetti';
import Section from '../ui/Section';

const BirthdayWish = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const randomInRange = (min, max) => Math.random() * (max - min) + min;

            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);
                confetti({
                    ...defaults, particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
                });
                confetti({
                    ...defaults, particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
                });
            }, 250);

            return () => clearInterval(interval);
        }
    }, [isInView]);

    return (
        <Section className="bg-white relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
            {/* Fireworks CSS placeholders or effects could go here */}

            <div ref={ref} className="text-center z-10 px-4">
                <motion.div
                    className="mb-8"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ type: "spring", bounce: 0.5 }}
                >
                    <span className="text-6xl md:text-8xl">🎂</span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-500 to-purple-600 mb-8 drop-shadow-sm"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                >
                    Happy Birthday <br /> My Mera Bachhu ❤️
                </motion.h1>

                <motion.p
                    className="text-2xl md:text-3xl text-gray-700 font-light max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 1 }}
                >
                    "No matter where life takes us,<br />
                    You will always be my home."
                </motion.p>
            </div>
        </Section>
    );
};

export default BirthdayWish;
