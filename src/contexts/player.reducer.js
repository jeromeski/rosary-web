import { produce } from "immer";
import initialState from '../data/state-joyful';

const START = "START";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const NEXT = "NEXT";
const BACK = "BACK";
const RESET = "RESET";
const PAUSE = "PAUSE";
const PLAY = "PLAY";


const playerReducer = produce((draft, action) => {
  switch (action.type) {
    case START:
      draft.isActive = true;
      draft.isPlaying = true;
      break;
    case INCREASE:
      draft.count = draft.count + 1;
      break;
    case DECREASE:
      draft.count = draft.count - 1;
      break;
    case NEXT:
      draft.currentIdx = (draft.currentIdx + 1) % draft.items.length
      break
    case BACK:
      case NEXT:
      draft.currentIdx = (draft.currentIdx - 1) % draft.items.length
      break
    case RESET:
      return initialState
    case PAUSE:
      draft.isPlaying = false
      
    case PLAY:
      draft.isPlaying = true
    default:
      return draft;
  }
});

export default playerReducer;
