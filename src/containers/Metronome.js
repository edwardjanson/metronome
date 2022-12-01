import { useState, useEffect, useRef } from 'react';

import Title from "../components/Title";
import Slider from "../components/Slider";
import BPM from "../components/BPM";
import PlayPause from "../components/PlayPause";
import Indicator from "../components/Indicator";

import './Metronome.css';

const Metronome = () => {
    const [bpm, setBPM] = useState(100);
    const [isPlaying, setIsPlaying] = useState(false);
    const intervalIdRef = useRef(null);
    const audioRef = useRef(null);
    const [onOff, setOnOff] = useState(false);

    const handleBpmChange = (bpm) => {
        console.log("handleBpmChange", bpm)
        setBPM(bpm);
    }

    const handleButtonClick = () => {
        console.log("handleButtonClick")
        setIsPlaying(!isPlaying);
    }

    const playBeat = () => {
        console.log("playBeat", audioRef.current.ended, audioRef.current.currentTime);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setOnOff(true);
        let milliSeconds = 60000 / bpm / 2;
        if (milliSeconds > 200)
            milliSeconds = 200;
        setTimeout(() => setOnOff(false), milliSeconds);
    }

    useEffect(() => {
        if (isPlaying) {
            const milliSeconds = 60000 / bpm;
            clearInterval(intervalIdRef.current);
            let newIntervalId = setInterval(() => playBeat(), milliSeconds);
            intervalIdRef.current = newIntervalId;
            console.log("called setInterval", newIntervalId, milliSeconds)
        } else {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bpm, isPlaying])

    return <div className="Metronome">
        <Title title={"Metronome"} />
        <Slider bpm={bpm} onBpmChange={handleBpmChange} />

        <div className="controls">
            <BPM bpm={bpm} />
            <PlayPause isPlaying={isPlaying} onClick={handleButtonClick} />
        </div>

        <Indicator onOff={onOff} isPlaying={isPlaying}/>

        <audio ref={audioRef} src="/beat.wav" />
    </div>
}

export default Metronome;