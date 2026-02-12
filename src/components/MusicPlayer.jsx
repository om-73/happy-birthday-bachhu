import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        // Attempt auto-play on mount (often blocked by browsers until interaction)
        if (audioRef.current) {
            audioRef.current.volume = 0.4;
        }

        // Add event listener for first user interaction to start audio
        const handleFirstInteraction = () => {
            if (audioRef.current && !isPlaying) {
                audioRef.current.play().catch(e => console.log("Auto-play prevented"));
                setIsPlaying(true);
            }
            window.removeEventListener('click', handleFirstInteraction);
        };

        window.addEventListener('click', handleFirstInteraction);
        return () => window.removeEventListener('click', handleFirstInteraction);
    }, []);

    return (
        <div className="fixed top-4 right-4 z-50">
            <audio ref={audioRef} loop>
                <source src="/audio/romantic-bg-music.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className="bg-white/30 backdrop-blur-md p-3 rounded-full shadow-lg border border-white/50 text-rose-600 hover:bg-white/50 transition-all cursor-pointer"
            >
                {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </motion.button>
        </div>
    );
};

export default MusicPlayer;
