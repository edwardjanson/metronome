let timeoutCompleted = true;

const Slider = ({bpm, onBpmChange}) => {
    const handleChange = (event) => {
        if (timeoutCompleted) {
            timeoutCompleted = false;
            setTimeout(() => { 
                onBpmChange(event.target.value);
                timeoutCompleted = true;
            }, 100)
        }
    };
    return <input className="Slider"
        type="range" min="40" max="218" defaultValue={bpm} 
        onChange={handleChange} />
}

export default Slider;