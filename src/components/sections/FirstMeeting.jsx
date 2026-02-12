import React from 'react';
import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';
import Section from '../ui/Section';

const FirstMeeting = () => {
    return (
        <Section className="bg-gradient-to-b from-indigo-900 to-slate-800 text-white relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                {/* Moving Clouds */}
                <motion.div
                    initial={{ x: '-10%' }}
                    animate={{ x: '110%' }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 left-0"
                >
                    <Cloud size={100} className="text-gray-400" />
                </motion.div>
                <motion.div
                    initial={{ x: '-10%' }}
                    animate={{ x: '110%' }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
                    className="absolute top-32 left-0"
                >
                    <Cloud size={80} className="text-gray-500" />
                </motion.div>
            </div>

            <div className="text-center max-w-4xl z-10 relative px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-indigo-100 mb-6 drop-shadow-md">
                        The First Meeting
                    </h2>
                </motion.div>

                <div className="space-y-6 text-xl md:text-3xl font-light italic text-indigo-200">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        viewport={{ once: true }}
                    >
                        "The day we met for the first time in a train..."
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        viewport={{ once: true }}
                    >
                        "That journey changed my life forever."
                    </motion.p>
                </div>
            </div>

            {/* Realistic Train Animation */}
            <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden z-0">
                {/* Track */}
                <div className="absolute bottom-0 w-full h-4 bg-gray-700 border-t-2 border-gray-500">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="absolute h-full w-2 bg-gray-600" style={{ left: `${i * 5}%` }}></div>
                    ))}
                </div>

                {/* Moving Train Container */}
                <motion.div
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '120%' }}
                    transition={{ duration: 8, ease: "linear" }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 flex items-end"
                >
                    {/* Engine */}
                    <div className="relative w-40 h-24 bg-blue-800 rounded-tr-xl rounded-tl-md border-2 border-gray-600 mr-1">
                        <div className="absolute top-4 right-4 w-12 h-8 bg-yellow-200/50 backdrop-blur-sm border border-yellow-400"></div> {/* Window */}
                        <div className="absolute -top-4 right-4 w-6 h-6 bg-gray-700 rounded-t-lg"></div> {/* Chimney */}
                        <div className="absolute bottom-2 left-2 w-full flex justify-between px-2">
                            <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-gray-500 animate-spin-slow"></div>
                            <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-gray-500 animate-spin-slow"></div>
                        </div>
                    </div>

                    {/* Carriages */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="relative w-48 h-20 bg-blue-700 rounded-md border-2 border-gray-600 mr-1 flex items-center justify-around">
                            <div className="w-12 h-8 bg-yellow-100/30 border border-gray-500"></div>
                            <div className="w-12 h-8 bg-yellow-100/30 border border-gray-500"></div>

                            <div className="absolute bottom-[-10px] left-4 w-8 h-8 rounded-full bg-gray-900 border-2 border-gray-500 animate-spin-slow"></div>
                            <div className="absolute bottom-[-10px] right-4 w-8 h-8 rounded-full bg-gray-900 border-2 border-gray-500 animate-spin-slow"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default FirstMeeting;
