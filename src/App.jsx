import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MusicPlayer from './components/MusicPlayer';
import FloatingHearts from './components/ui/FloatingHearts';
import Hero from './components/sections/Hero';
import FirstMeeting from './components/sections/FirstMeeting';
import PuneDistance from './components/sections/PuneDistance';
import Breakup from './components/sections/Breakup';
import PatchUp from './components/sections/PatchUp';
import Engineering from './components/sections/Engineering';
import MoveBaner from './components/sections/MoveBaner';
import HappiestTime from './components/sections/HappiestTime';
import BangaloreStory from './components/sections/BangaloreStory';
import BirthdayWish from './components/sections/BirthdayWish';
import FinalReveal from './components/sections/FinalReveal';
import ForeverMoment from './components/sections/ForeverMoment';
import Logo from './components/ui/Logo';

import Countdown from './components/sections/Countdown';

function App() {
  const [loading, setLoading] = useState(true); // Countdown state
  const [showStory, setShowStory] = useState(false);
  const [showForever, setShowForever] = useState(false);

  const handleStartStory = () => {
    setShowStory(true);
    setTimeout(() => {
      const element = document.getElementById('first-meeting');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleEndStory = () => {
    setShowForever(true);
  };

  return (
    <div className="font-body text-gray-900 overflow-x-hidden transition-colors duration-1000">
      <MusicPlayer />
      <FloatingHearts />
      {!showForever && <Logo />}

      {loading ? (
        <Countdown onComplete={() => setLoading(false)} />
      ) : (
        <>
          {!showForever && (
            <main className="relative z-10 pb-20">
              <Hero onStart={handleStartStory} />

              <AnimatePresence>
                {showStory && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div id="first-meeting"><FirstMeeting /></div>
                    <PuneDistance />
                    <Breakup />
                    <PatchUp />
                    <Engineering />
                    <MoveBaner />
                    <HappiestTime />
                    <BangaloreStory />
                    <BirthdayWish />
                    <FinalReveal onComplete={handleEndStory} />
                  </motion.div>
                )}
              </AnimatePresence>
            </main>
          )}

          {showForever && (
            <ForeverMoment />
          )}

          {!showForever && (
            <footer className="bg-rose-900 text-rose-200 py-8 text-center relative z-10">
              <p className="opacity-70 text-sm">Made with ❤️ for Mera Bachhu</p>
            </footer>
          )}
        </>
      )}
    </div>
  );
}

export default App;
