'use client'
import React from 'react'
import { useSoundStore } from "@/stores/soundStore";
import SoundOff from '../icons/SoundOff';
import SoundOn from '../icons/SoundOn';

function SoundToggle() {
    const { soundOn, toggleSound } = useSoundStore();
    const playClick = () => {
        const sound = soundOn ? "sound-off" : "sound-on";
        const audio = new Audio(`/sounds/${sound}.wav`);
        audio.play();
    }

    return (
        <button
            onClick={() => {
                toggleSound();
                playClick();
            }}
            className=" dark:text-white"
        >
            {soundOn ? (<SoundOn />) : (<SoundOff />)}
        </button>
    )
}

export default SoundToggle