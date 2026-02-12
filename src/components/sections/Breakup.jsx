import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const Breakup = () => {
    return (
        <Section className="bg-slate-900 text-white relative">
            {/* Rain Animation - subtle CSS */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10 animate-slide-down"></div>

            {/* Heavy Rain CSS representation */}
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-blue-400/30 w-[1px] h-10"
                    initial={{ y: -50, x: Math.random() * window.innerWidth }}
                    animate={{ y: window.innerHeight + 50 }}
                    transition={{ duration: Math.random() * 0.5 + 0.5, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
                />
            ))}

            <div className="z-10 text-center relative max-w-3xl px-4">
                <motion.div
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0.8 }}
                    className="mb-8"
                >
                    <span className="text-8xl block mb-4 filter grayscale contrast-150">💔</span>
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-5xl font-display font-medium text-gray-400 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    "Then came the phase we never wanted..."
                </motion.h2>

                <motion.div
                    className="space-y-6 text-xl md:text-2xl text-gray-500 font-light"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        "We broke up..."
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="text-gray-300"
                    >
                        "It hurt... but love never left."
                    </motion.p>
                </motion.div>
            </div>
        </Section>
    );
};

export default Breakup;
