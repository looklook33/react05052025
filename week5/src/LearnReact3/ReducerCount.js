import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    default:
        return state;
  }
}
export default function ReducerCount() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h2>useReducer practise</h2>
      <p>{state.count}</p>
      <button onClick={()=>{dispatch({type:"INCREASE"})}}>+</button>
      <button onClick={()=>{dispatch({type:"DECREASE"})}}>-</button>
    </>
  );
}
