// AudioContext.js
import React, { createContext, useState, useContext } from 'react';

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export const AudioPlayerProvider = ({ children }) => {
    const [currentSrc, setCurrentSrc] = useState('');

    const playAudio = (src) => {
        setCurrentSrc(src);
    };

    const stopAudio = () => {
        setCurrentSrc('');
    };

    return (
        <AudioPlayerContext.Provider value={{ currentSrc, playAudio, stopAudio }}>
            {children}
        </AudioPlayerContext.Provider>
    );
};