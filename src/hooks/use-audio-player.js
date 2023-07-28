
import { usePlayerDispatch, usePlayerStore } from "../contexts/player.ctx";

function handle(dispatch){
    const start = () => {
    dispatch({ type: "START" });
  };

  const play = () => {
    dispatch({ type: "PLAY"})
  }

  const pause = () => {
    dispatch({type: "PAUSE"})
  }

  const next = () => {
    dispatch({type: "NEXT"})
  }

  const reset = () => {
    dispatch({type: "RESET"})
  }

  return {
    start, play, pause, next, reset 
  }
}

export default function useAudioPlayer(data) {
  const audioRef = React.useRef(null);
  const dispatch = usePlayerDispatch();
  const state = usePlayerStore();
  const {start, play, pause, next, reset} = handle(dispatch);

  React.useEffect(() => {

  },[])


  return { state, start, play, pause, next, reset };
}
