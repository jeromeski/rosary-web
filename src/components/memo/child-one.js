import { useLogger } from "react-use";

export default function ChildOne(props) {
    // useLogger('ChildOne', props)
  return (
    <>
      <h1>{props.count}</h1>
    </>
  );
}
