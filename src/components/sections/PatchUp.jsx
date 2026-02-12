import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Heart } from 'lucide-react';
import Section from '../ui/Section';

const PatchUp = () => {
    return (
        <Section className="bg-amber-50 relative overflow-hidden">
            {/* Golden Sunlight */}
            <motion.div
                className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 md:w-[800px] md:h-[800px] w-96 h-96 rounded-full bg-gradient-to-br from-yellow-300 to-orange-200 blur-3xl opacity-60 z-0"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="z-10 text-center flex flex-col items-center max-w-3xl px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "backOut" }}
                    className="mb-8"
                >
                    <div className="relative inline-block">
                        <Heart size={100} className="text-rose-500 fill-rose-500 drop-shadow-lg" />
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center text-white font-bold"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <Sun size={40} className="text-yellow-200 fill-yellow-200 animate-spin-slow" />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-5xl font-display font-bold text-amber-800 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    "But love is stronger."
                </motion.h2>

                <div className="text-xl md:text-2xl text-amber-900/80 space-y-4">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        "After one month..."
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                        className="font-bold text-rose-700"
                    >
                        "We found our way back to each other."
                    </motion.p>
                </div>
            </div>
        </Section>
    );
};

export default PatchUp;
