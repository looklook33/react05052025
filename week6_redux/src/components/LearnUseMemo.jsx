import { useState, memo, useMemo } from "react";
import Child from "./Child";

export default function LearnUseMemo() {
  //  console.log("parent")
  const [count, setCount] = useState(0);
  // const [person, setPerson] = useState({name:''})
  // console.log(person.name)
  const testObj = useMemo(() => {
    return {}
  },[]);

  return (
    <>
      <h2>6/12/2025</h2>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Child testObj={testObj} />
      {/* <input type="text" value={person.name} onChange={(e)=>setPerson({name:e.target.value})}/> */}
    </>
  );
}
