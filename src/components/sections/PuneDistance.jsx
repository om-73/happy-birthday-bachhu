import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Section from '../ui/Section';

const PuneDistance = () => {
    return (
        <Section className="bg-gradient-to-r from-rose-50 to-indigo-50 relative overflow-hidden">
            <div className="flex flex-col md:flex-row w-full max-w-6xl justify-between items-center relative z-10 px-8 py-12 min-h-[60vh]">

                {/* Left Side: Koregaon Park */}
                <motion.div
                    className="flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0 w-full md:w-1/3"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <MapPin size={64} className="text-rose-600 mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-gray-800">Koregaon Park</h3>
                    <p className="text-lg text-rose-500 font-medium mt-2">"You in Koregaon Park..."</p>
                </motion.div>

                {/* Center: Dotted Line Animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-1/3 h-2 z-0 hidden md:block">
                    <svg className="w-full h-20 overflow-visible">
                        <motion.path
                            d="M 0 10 L 400 10"
                            fill="none"
                            stroke="#db2777"
                            strokeWidth="4"
                            strokeDasharray="12 12"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-sm text-gray-400 bg-white px-2 rounded-full border">
                        ~ 40km
                    </div>
                </div>

                {/* Mobile vertical line */}
                <div className="md:hidden w-1 h-32 border-l-2 border-dashed border-rose-400 my-4 relative"></div>

                {/* Right Side: Talegaon */}
                <motion.div
                    className="flex flex-col items-center md:items-end text-center md:text-right w-full md:w-1/3"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <MapPin size={64} className="text-indigo-600 mb-4 animate-bounce delay-75" />
                    <h3 className="text-2xl font-bold text-gray-800">Talegaon</h3>
                    <p className="text-lg text-indigo-500 font-medium mt-2">"Me in Talegaon..."</p>
                </motion.div>

            </div>

            <motion.div
                className="mt-12 text-center z-10 p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-white/50 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <p className="text-2xl md:text-3xl font-display text-gray-700">
                    "But distance never stopped our hearts."
                </p>
            </motion.div>
        </Section>
    );
};

export default PuneDistance;
