import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Infinity as InfinityIcon, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import coupleImage from '../../assets/couple.jpeg';

const ForeverMoment = () => {
    const [showImage, setShowImage] = useState(false);

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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowImage(true)}
                className="p-6 border-2 border-rose-300 rounded-lg cursor-pointer hover:bg-rose-50 transition-colors shadow-lg"
            >
                <p className="text-xl font-bold text-rose-700 tracking-widest uppercase">
                    Always Yours ❤️
                </p>
                <p className="text-xs text-rose-400 mt-2 italic">(Click for a surprise)</p>
            </motion.div>

            <AnimatePresence>
                {showImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
                        onClick={() => setShowImage(false)}
                    >
                        {/* Define SVG Clip Path */}
                        <svg width="0" height="0" className="absolute">
                            <defs>
                                <clipPath id="heartPath" clipPathUnits="objectBoundingBox">
                                    <path d="M0.5,0.05 C0.45,0.02 0.35,0 0.25,0 C0.1,0 0,0.12 0,0.28 C0,0.45 0.15,0.62 0.5,0.9 C0.85,0.62 1,0.45 1,0.28 C1,0.12 0.9,0 0.75,0 C0.65,0 0.55,0.02 0.5,0.05" />
                                </clipPath>
                            </defs>
                        </svg>

                        <motion.div
                            initial={{ scale: 0, rotate: -15, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            exit={{ scale: 0, rotate: 15, opacity: 0 }}
                            transition={{ type: "spring", damping: 15 }}
                            className="relative flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Animated Background Glow */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-rose-500/30 blur-3xl rounded-full"
                            />

                            <button
                                onClick={() => setShowImage(false)}
                                className="absolute -top-12 right-0 text-white hover:text-rose-300 transition-colors z-10 p-2"
                            >
                                <X size={28} />
                            </button>

                            <div className="relative group">
                                {/* The Heart Image Container */}
                                <div
                                    className="w-[85vw] h-[110vw] max-w-[400px] max-h-[500px] bg-white p-1 relative overflow-hidden"
                                    style={{ clipPath: 'url(#heartPath)' }}
                                >
                                    {/* Blurred Background */}
                                    <div
                                        className="absolute inset-0 scale-110 blur-md opacity-50"
                                        style={{
                                            backgroundImage: `url(${coupleImage})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    />

                                    {/* Full Image in foreground */}
                                    <img
                                        src={coupleImage}
                                        alt="Us"
                                        className="relative w-full h-full object-contain z-10 p-2 translate-y-4"
                                    />
                                </div>

                                {/* Inner Border Overlay */}
                                <div
                                    className="absolute inset-0 border-4 border-white/40 pointer-events-none z-20"
                                    style={{ clipPath: 'url(#heartPath)' }}
                                />
                            </div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-center mt-6"
                            >
                                <p className="text-rose-200 font-display text-2xl drop-shadow-lg">
                                    Forever & Always ✨
                                </p>
                                <p className="text-rose-400 text-sm mt-1 italic tracking-widest">
                                    My Everything
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ForeverMoment;
