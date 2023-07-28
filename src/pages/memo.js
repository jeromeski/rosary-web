import { useLogger } from "react-use";
import ChildOne from "../components/memo/child-one.js";
import MemoChildTwo from "../components/memo/child-two.js";
import ChildThree from "../components/memo/child-three.js";
import { usePlayerDispatch, usePlayerStore } from "../contexts/player.ctx";

export default function UsingMemo() {
  useLogger("UsingMemo", {});
  const dispatch = usePlayerDispatch();
  const state = usePlayerStore();

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
      </div>
      <div>
        <ChildOne count={state.count} />
        <MemoChildTwo />
        {state.count < 3 && <ChildThree />}
      </div>
    </>
  );
}
