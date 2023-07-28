import { memo } from "react";
import { useLogger } from "react-use";

function ChildTwo(props) {
  // useLogger('ChildTwo', props)
  return (
    <>
      <h1>2</h1>
    </>
  );
}

const MemoChildTwo = memo(ChildTwo);

export default MemoChildTwo;
