import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Section from '../ui/Section';

const MoveBaner = () => {
    return (
        <Section className="bg-gradient-to-r from-orange-50 to-amber-100 relative">
            <div className="z-10 flex flex-col items-center text-center max-w-4xl px-4">

                <div className="relative mb-12">
                    <motion.div
                        className="bg-white p-6 rounded-2xl shadow-xl border-2 border-orange-200"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <Home size={64} className="text-orange-600 fill-orange-100" />
                    </motion.div>
                    <motion.div
                        className="absolute -top-4 -right-4 text-2xl"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1.5, rotate: 20 }}
                        transition={{ delay: 0.5 }}
                    >
                        ✨
                    </motion.div>
                </div>

                <motion.h2
                    className="text-4xl md:text-5xl font-display font-bold text-orange-900 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    "I moved to Baner..."
                </motion.h2>

                <motion.p
                    className="text-2xl md:text-3xl text-orange-800/80 font-serif italic"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    "And life became even more beautiful with you."
                </motion.p>
            </div>
        </Section>
    );
};

export default MoveBaner;
