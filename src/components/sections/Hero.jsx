import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const Typewriter = ({ text, delay = 50 }) => {
    const [currentText, setCurrentText] = React.useState('');
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
};

const Hero = ({ onStart }) => {
    return (
        <Section
            className="bg-gradient-to-br from-purple-900 via-rose-800 to-purple-900 text-white relative overflow-hidden"
            animate={{ opacity: 1, y: 0 }} // Force immediate animation for Hero
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse"></div>

            {/* Soft Sparkle Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full opacity-0"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        scale: 0
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [0, 1, 0],
                        scale: [0, Math.random() * 1.5, 0]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                    style={{ width: Math.random() * 4 + 1, height: Math.random() * 4 + 1 }}
                />
            ))}

            <div className="z-10 text-center space-y-8 max-w-4xl px-4">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    Happy Birthday, <br /> Mera Bachhu ❤️
                </motion.h1>

                <motion.div
                    className="text-xl md:text-3xl font-light text-rose-100 italic h-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <Typewriter text="The most beautiful chapter of my life..." />
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(255,105,180,0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onStart}
                    className="mt-12 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg shadow-lg hover:bg-white/20 transition-all"
                >
                    Start Our Story
                </motion.button>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="text-white/50 text-sm mb-2">Scroll to Begin</div>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 mx-auto">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </Section>
    );
};

export default Hero;
