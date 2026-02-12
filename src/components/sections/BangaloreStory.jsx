import React from 'react';
import { motion } from 'framer-motion';
import { Map, Plane, Building2, Infinity as InfinityIcon } from 'lucide-react';
import Section from '../ui/Section';

const BangaloreStory = () => {
    return (
        <Section className="bg-gradient-to-b from-indigo-900 via-purple-900 to-orange-100 text-white relative">
            {/* Background Transition: Night to Sunrise is handled by gradient */}

            {/* City Lights Decor */}
            <div className="absolute top-20 left-10 opacity-20 animate-pulse">
                <Building2 size={120} />
            </div>

            <div className="z-10 text-center max-w-4xl px-4 w-full relative">

                {/* Journey Animation */}
                <div className="relative h-32 w-full mb-12 flex items-center justify-center">
                    <div className="w-11/12 md:w-3/4 h-1 bg-white/20 rounded-full relative overflow-visible">
                        <div className="absolute left-0 -top-2 w-4 h-4 bg-white rounded-full"></div>
                        <div className="absolute right-0 -top-2 w-4 h-4 bg-orange-300 rounded-full shadow-[0_0_10px_#fdba74]"></div>

                        <motion.div
                            className="absolute -top-6 text-white"
                            initial={{ left: '0%' }}
                            whileInView={{ left: '100%' }}
                            transition={{ duration: 3, ease: "easeInOut" }}
                        >
                            <Plane size={32} className="transform rotate-90" />
                        </motion.div>
                    </div>
                    <div className="absolute left-[10%] top-6 text-sm text-gray-400">Pune</div>
                    <div className="absolute right-[10%] top-6 text-sm text-orange-200">Bangalore</div>
                </div>

                <div className="space-y-12">
                    {/* Part 1: Moving */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-orange-100 mb-4">"Then life called me to Bangalore..."</h3>
                        <p className="text-xl text-gray-300 font-light">"For job hunting... For building our future..."</p>
                    </motion.div>

                    {/* Part 2: The Promise */}
                    <motion.div
                        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-orange-200 mb-6 flex items-center justify-center gap-3">
                            <InfinityIcon size={32} /> A Promise to You
                        </h2>

                        <div className="space-y-4 text-lg md:text-xl text-gray-100 italic">
                            <p>"No matter where I go... My heart belongs to you."</p>
                            <p className="font-semibold text-white">"I promise you, Mera Bachhu..."</p>
                            <ul className="space-y-2 py-4">
                                <li>"I will give you the happiest life you dream of."</li>
                                <li>"I will protect your smile."</li>
                                <li>"I will never hurt you."</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Part 3: Future */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <p className="text-2xl font-display text-orange-500 font-bold drop-shadow-sm">
                            "This distance is not separation..."<br />
                            "It is preparation for our beautiful future."
                        </p>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default BangaloreStory;
