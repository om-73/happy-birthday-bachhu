import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';

const Logo = () => {
    return (
        <motion.div
            className="fixed top-6 left-6 z-50 flex items-center gap-2 cursor-pointer mix-blend-difference"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="relative">
                <HeartHandshake className="text-white w-8 h-8 md:w-10 md:h-10 drop-shadow-md" />
                <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full border-2 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                />
            </div>

            <div className="flex flex-col">
                <span className="font-display font-bold text-xl md:text-2xl text-white tracking-wide drop-shadow-md leading-none">
                    Mera Bachhu
                </span>
                <span className="text-[10px] md:text-xs text-rose-200 font-light tracking-[0.2em] uppercase">
                    Our Story
                </span>
            </div>
        </motion.div>
    );
};

export default Logo;
