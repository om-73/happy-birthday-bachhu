import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newHeart = {
                id: Math.random(),
                left: Math.random() * 100,
                scale: Math.random() * 0.5 + 0.5,
                duration: Math.random() * 10 + 10,
            };

            setHearts((current) => [...current.slice(-15), newHeart]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: '110vh', opacity: 0, x: `${heart.left}%` }}
                    animate={{
                        y: '-10vh',
                        opacity: [0, 1, 0],
                        x: `${heart.left + (Math.random() * 20 - 10)}%` // Subtle horizontal drift
                    }}
                    transition={{
                        duration: heart.duration,
                        ease: "linear",
                        repeat: 0
                    }}
                    className="absolute text-rose-300 text-opacity-30"
                    style={{ fontSize: `${heart.scale * 2}rem` }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;
