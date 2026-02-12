import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import birthdayGirlImage from '../../assets/birthday-girl.jpg';

const FinalReveal = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    const startReveal = () => {
        setStep(1); // Fade to white
        // Sequence timing
        setTimeout(() => setStep(2), 2000); // Rose appears
        setTimeout(() => setStep(3), 4000); // Rose Blooms / Photo Reveal
        setTimeout(() => setStep(4), 8000); // Lines start
    };

    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center bg-pink-50 py-10 relative">
            {!step && (
                <motion.button
                    onClick={startReveal}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-gradient-to-r from-rose-400 to-pink-600 text-white rounded-full text-xl font-bold shadow-xl animate-bounce"
                >
                    Tap for a Magical Surprise ✨
                </motion.button>
            )}

            <AnimatePresence>
                {step >= 1 && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        {/* Step 2: Rose Animation Container */}
                        {step >= 2 && (
                            <div className="relative w-96 h-96 flex items-center justify-center">

                                {/* Petals Layer - blooms on Step 3 */}
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute bg-gradient-to-br from-red-600 to-rose-400 rounded-full shadow-lg origin-bottom"
                                        style={{
                                            width: 60, height: 100,
                                            rotate: i * 45,
                                        }}
                                        initial={{ scale: 0, y: 0 }}
                                        animate={step >= 3 ? {
                                            scale: 1.5,
                                            y: -40,
                                            rotateX: 60,
                                        } : {
                                            scale: 1, // Closed bud state
                                            y: 0,
                                            rotateX: 0
                                        }}
                                        transition={{ duration: 3, ease: "easeInOut" }}
                                    />
                                ))}

                                {/* Center Bud / Photo Reveal */}
                                <motion.div
                                    className="relative z-20 w-48 h-48 rounded-full overflow-hidden border-4 border-rose-200 shadow-[0_0_50px_rgba(255,0,100,0.5)]"
                                    initial={{ scale: 0 }}
                                    animate={step >= 3 ? { scale: 1.5 } : { scale: 0 }}
                                    transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
                                >
                                    <img
                                        src={birthdayGirlImage}
                                        alt="Birthday Girl"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Optional overlay glow */}
                                    <div className="absolute inset-0 bg-rose-500/10 mix-blend-overlay"></div>
                                </motion.div>
                            </div>
                        )}

                        {/* Step 4: Text Lines Sequence */}
                        {step >= 4 && (
                            <div className="z-30 mt-20 text-center space-y-4 px-4 relative top-10">
                                <TextLine text="From a train journey..." delay={0} />
                                <TextLine text="To a lifetime journey..." delay={2} />
                                <TextLine text="You became my happiest chapter." delay={4} />

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 6.5, duration: 1 }}
                                    className="mt-8 space-y-2 text-rose-800"
                                >
                                    <p className="text-xl">"You are not just my love..."</p>
                                    <p className="text-xl font-semibold">"My peace. My strength. My home."</p>
                                </motion.div>

                                <motion.h1
                                    className="text-4xl md:text-6xl font-display font-bold text-rose-600 mt-8 drop-shadow-lg"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 8, type: "spring" }}
                                >
                                    Happy Birthday, <br /> My Mera Bachhu ❤️
                                </motion.h1>

                                {step >= 4 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 11 }}
                                        className="mt-12 mb-10"
                                    >
                                        <button
                                            onClick={onComplete}
                                            className="px-8 py-3 bg-red-500 text-white rounded-full font-bold shadow-lg flex items-center gap-2 mx-auto hover:bg-red-600 transition-colors"
                                        >
                                            <Heart className="fill-current" /> Forever With You
                                        </button>
                                        <div className="mt-8 text-rose-800 font-serif italic opacity-80 pb-10">
                                            "I choose you. Today. Tomorrow. Forever."
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const TextLine = ({ text, delay }) => (
    <motion.p
        className="text-xl md:text-2xl text-gray-700 font-light"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 1 }}
    >
        {text}
    </motion.p>
);

export default FinalReveal;
