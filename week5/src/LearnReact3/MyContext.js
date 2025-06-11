import { useState, createContext, useContext } from "react"

const CountCountext = createContext(null)

export default function MyContext (){
    const [count, setCount]=useState(0);
    return (
        <CountCountext.Provider value ={{count, setCount}}>
        <h2>Context practise</h2>
        <Count />
        <AddCount />
        </CountCountext.Provider>
    )
}

function Count(){
    const {count} = useContext(CountCountext)
    return (
        <p>{count}</p>
     )
}

function AddCount(){
    const {count, setCount} = useContext(CountCountext)
    return (
        <>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={()=>{setCount(count-1)}}>-</button>
        </>

    )
}