import './Indicator.css';

const Indicator = ({onOff, isPlaying}) => {
    // console.log("Indicator", onOff);
    return <div className={"Indicator " + (isPlaying ? (onOff ? "Beat" : "") : "Idle")}></div>
};

export default Indicator;