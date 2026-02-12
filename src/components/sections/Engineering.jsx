import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import Section from '../ui/Section';

const Engineering = () => {
    return (
        <Section className="bg-sky-50 relative">
            <div className="z-10 text-center max-w-4xl px-6">
                <motion.div
                    initial={{ y: 50, opacity: 0, rotate: -15 }}
                    whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="mb-8 inline-block p-6 bg-white rounded-full shadow-xl"
                >
                    <GraduationCap size={100} className="text-sky-800" />
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-5xl font-display font-bold text-sky-900 mb-8 leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    "As I completed my engineering..."
                </motion.h2>

                <motion.p
                    className="text-2xl md:text-3xl text-sky-700 font-light"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    "Life was preparing us for something bigger."
                </motion.p>
            </div>
        </Section>
    );
};

export default Engineering;
