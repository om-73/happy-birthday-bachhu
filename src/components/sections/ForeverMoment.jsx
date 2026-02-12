import React from 'react';
import { motion } from 'framer-motion';
import { Infinity as InfinityIcon } from 'lucide-react';
import confetti from 'canvas-confetti';

const ForeverMoment = () => {

    React.useEffect(() => {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;

        // Trigger fireworks
        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            confetti({
                startVelocity: 30, spread: 360, ticks: 60, zIndex: 100,
                particleCount: 50,
                origin: { x: Math.random(), y: Math.random() - 0.2 }
            });
        }, 250);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[60] bg-gradient-to-br from-rose-100 via-amber-50 to-orange-100 flex flex-col items-center justify-center text-center p-4">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="mb-8"
            >
                <InfinityIcon size={120} className="text-rose-600 drop-shadow-2xl" strokeWidth={1} />
            </motion.div>

            <motion.h1
                className="text-4xl md:text-6xl font-display font-bold text-rose-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                "This is not just a story.<br />
                This is our forever."
            </motion.h1>

            <motion.p
                className="text-2xl md:text-3xl text-rose-800 font-light italic mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                "And forever is beautiful with you."
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="p-6 border-2 border-rose-300 rounded-lg"
            >
                <p className="text-xl font-bold text-rose-700 tracking-widest uppercase">
                    Always Yours ❤️
                </p>
            </motion.div>
        </div>
    );
};

export default ForeverMoment;
