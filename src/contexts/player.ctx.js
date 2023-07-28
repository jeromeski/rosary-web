import { useContext, createContext, useRef, useReducer } from "react";
import { useLogger } from "react-use";
import playerReducer from "./player.reducer";
import initialState from "../data/state-joyful";

const PlayerStoreCtx = createContext(null);
const PlayerDispatchCtx = createContext(null);

const PlayerProvider = (props) => {
  useLogger("PlayerProvider", props);
  const [state, dispatch] = useReducer(playerReducer, initialState);

  return (
    <PlayerDispatchCtx.Provider value={dispatch}>
      <PlayerStoreCtx.Provider value={state}>
        {props.children}
      </PlayerStoreCtx.Provider>
    </PlayerDispatchCtx.Provider>
  );
};

const usePlayerStore = () => {
  return useContext(PlayerStoreCtx);
};

const usePlayerDispatch = () => {
  return useContext(PlayerDispatchCtx);
};

export { usePlayerStore, usePlayerDispatch };

export default PlayerProvider;
