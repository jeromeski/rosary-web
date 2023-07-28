import React from 'react';
import { useLogger } from "react-use";
import { usePlayerDispatch, usePlayerStore } from "../contexts/player.ctx";

export default function Joyful(props) {
  useLogger("Joyful", props);
  


  const handleStart = () => {
    dispatch({type: 'START'})
  }

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
