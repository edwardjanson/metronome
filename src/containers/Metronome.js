import { useState, useEffect, useRef } from 'react';

import Title from "../components/Title";
import Slider from "../components/Slider";
import BPM from "../components/BPM";
import PlayPause from "../components/PlayPause";

const Metronome = () => {
    const [bpm, setBPM] = useState(100);
    const [isPlaying, setIsPlaying] = useState(false);
    // const [intervalId, setIntervalId] = useState(null);
    const intervalIdRef = useRef(null);

    const handleBpmChange = (bpm) => {
        console.log("handleBpmChange", bpm)
        setBPM(bpm);
    }

    const handleButtonClick = () => {
        console.log("handleButtonClick")
        setIsPlaying(!isPlaying);
    }

    const playBeat = () => {
        console.log("Beat");
        // audioSrc.current.play()
    }

    useEffect(() => {
        if (isPlaying) {
            const milliSeconds = 60000 / bpm;
            const newIntervalId = setInterval(() => playBeat(), milliSeconds);
            // setIntervalId(newIntervalId);
            intervalIdRef.current = newIntervalId;
            console.log("called setInterval", newIntervalId, milliSeconds)
        } else {
            clearInterval(intervalIdRef.current);
            // setIntervalId(null);
            intervalIdRef.current = null;
        }
    }, [bpm, isPlaying])

    return <div>
        <Title title={"Metronome"} />
        <Slider bpm={bpm} onBpmChange={handleBpmChange} />
        <BPM bpm={bpm} />
        <PlayPause isPlaying={isPlaying} onClick={handleButtonClick} />

        <audio src="/beat.wav" />
    </div>
}

export default Metronome;