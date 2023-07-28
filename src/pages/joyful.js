import React, { useRef } from "react";
import { useLogger } from "react-use";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.development";
import { usePlayerDispatch, usePlayerStore } from "../contexts/player.ctx";
import useAudioPlayer from "../hooks/use-audio-player";

export default function Joyful(props) {
  useLogger("Joyful", props);
  const isPlayRef = React.useRef(null);
  const { state, start, play, pause, next, reset, audio } = useAudioPlayer();

  const handleStart = () => {
    isPlay.current = true;
    start();
  };

  React.useEffect(() => {
    if (isPlayRef?.current !== null) {
      console.log(isPlayRef.current);
    }
    if (audio) {
      if (!isPlay) {
        isPlay.current = true;
        audio.play();
        audio.addEventListener("onended", () => {
          if (state.currentIdx === state.playlist.length - 1) {
            stop();
            audio.pause();
            audio.src = "";
            audio.currentTime = 0;
          } else {
            next();
          }
        });
      }
    }
  }, []);

  return (
    <>
      <h3>Joyful Mysteries</h3>
      <div>
        <button onClick={handleStart}>start</button>
        <button>play</button>
        <button>pause</button>
        <button>next</button>
        <button>reset</button>
      </div>
    </>
  );
}
