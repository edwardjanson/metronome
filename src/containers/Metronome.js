import { useState, useEffect } from 'react';

import Title from "../components/Title";
import Slider from "../components/Slider";
import BPM from "../components/BPM";
import PlayPause from "../components/PlayPause";

const Metronome = () => {
    const [bpm, setBPM] = useState(100);
    const [isPlaying, setIsPlayer] = useState(false);

    const handleBpmChange = (bpm) => {
        console.log("handleBpmChange", bpm)
        setBPM(bpm);
    }

    const handleButtonClick = () => { console.log("handleButtonClick") }

    return <div>
        <Title title={"Metronome"} />
        <Slider bpm={bpm} onBpmChange={handleBpmChange} />
        <BPM bpm={bpm} />
        <PlayPause isPlaying={isPlaying} onClick={handleButtonClick} />
    </div>
}

export default Metronome;