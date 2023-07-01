import { useEffect, useState } from "react";
import "./styles.css";
import hailMary from './assets/sounds/hail_mary.mp3'



export default function App() {
  const [isPlay, setIsPlay] = useState(false);
  // const audio = new Audio(hailMary);
  const [audio, setAudio] = useState(new Audio(hailMary));
  const [ended, setEnded] = useState(audio.ended)

  useEffect(() => {
    if(isPlay){
      audio.play();
      // at the end of playback, disable button
    } else {
      audio.pause();
    }
  },[isPlay, audio, audio.ended]);

  console.log(ended)

  return (
    <div className="App">
      <button onClick={() => setIsPlay(!isPlay)}>{!isPlay ? 'play' : 'pause'}</button>
    </div>
  );
}
