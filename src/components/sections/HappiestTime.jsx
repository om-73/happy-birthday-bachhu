import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import coupleImage from '../../assets/couple.jpg';

const HappiestTime = () => {
    return (
        <Section className="bg-gradient-to-b from-amber-100 to-rose-100 relative overflow-hidden">
            {/* Warm Sunset Background Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-transparent to-transparent opacity-50 z-0"></div>

            <div className="z-10 flex flex-col items-center max-w-4xl px-4 w-full">

                <motion.div
                    className="relative mb-12 p-4 bg-white/40 backdrop-blur-sm rounded-xl shadow-2xl border border-white/60"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="relative overflow-hidden rounded-lg shadow-inner">
                        <motion.img
                            src={coupleImage}
                            alt="Happiest Moment"
                            className="w-full max-w-xs md:max-w-sm rounded-lg object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 5 }}
                        />
                        {/* Glowing Frame Effect */}
                        <div className="absolute inset-0 border-4 border-white/50 rounded-lg shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                    </div>

                    {/* Floating Memory Cards Decor */}
                    <motion.div
                        className="absolute -top-6 -left-6 w-16 h-16 bg-white p-1 shadow-lg transform -rotate-12 z-20"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <div className="w-full h-full bg-rose-100"></div>
                    </motion.div>
                    <motion.div
                        className="absolute -bottom-6 -right-6 w-20 h-20 bg-white p-1 shadow-lg transform rotate-12 z-20"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    >
                        <div className="w-full h-full bg-indigo-100"></div>
                    </motion.div>
                </motion.div>

                <div className="text-center space-y-6">
                    <motion.h2
                        className="text-3xl md:text-5xl font-display font-bold text-rose-900"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        "These were the happiest moments of my life."
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-rose-800 font-light italic"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        "Every second with you is my favorite memory.<br />
                        You are my peace."
                    </motion.p>
                </div>
            </div>
        </Section>
    );
};

export default HappiestTime;
