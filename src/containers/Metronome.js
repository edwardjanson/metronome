import { useState, useEffect, useRef } from 'react';

import Title from "../components/Title";
import Slider from "../components/Slider";
import BPM from "../components/BPM";
import PlayPause from "../components/PlayPause";

const Metronome = () => {
    const [bpm, setBPM] = useState(100);
    const [isPlaying, setIsPlaying] = useState(false);
    const intervalIdRef = useRef(null);
    const audioRef = useRef(null);

    const handleBpmChange = (bpm) => {
        console.log("handleBpmChange", bpm)
        setBPM(bpm);
    }

    const handleButtonClick = () => {
        console.log("handleButtonClick")
        setIsPlaying(!isPlaying);
    }

    const playBeat = () => {
        console.log("Beat", audioRef.current.ended, audioRef.current.currentTime);
        audioRef.current.currentTime = 0;
        audioRef.current.play()
    }

    useEffect(() => {
        if (isPlaying) {
            const milliSeconds = 60000 / bpm;
            clearInterval(intervalIdRef.current);
            const newIntervalId = setInterval(() => playBeat(), milliSeconds);
            intervalIdRef.current = newIntervalId;
            console.log("called setInterval", newIntervalId, milliSeconds)
        } else {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
        }
    }, [bpm, isPlaying])

    return <div>
        <Title title={"Metronome"} />
        <Slider bpm={bpm} onBpmChange={handleBpmChange} />
        <BPM bpm={bpm} />
        <PlayPause isPlaying={isPlaying} onClick={handleButtonClick} />

        <audio ref={audioRef} src="/beat.wav" />
    </div>
}

export default Metronome;