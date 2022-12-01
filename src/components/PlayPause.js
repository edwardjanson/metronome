import './PlayPause.css';

const PlayPause = ({isPlaying, onClick}) => {
    if (isPlaying) {
        return <button className="Play" onClick={onClick}><img src="/pause-icon.png" alt="Pause" /></button>
    } else {
        return <button className="Pause" onClick={onClick}><img src="/play-icon.png" alt="Play" /></button>
    }
}

export default PlayPause;