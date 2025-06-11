import React ,{ useState } from "react";

export default function AddAge () {
    const [age, setAge] =useState();

    const increaseAge = ()=>{
        setAge(age+1)
    }
    const decreasAge = () =>{
        setAge(age-1)
    }

    return (
        <>
         <p style={{color:"blue", fontSize:20, fontWeight:"bold"}}>{age}</p> 
        <br/>
        <button onClick={increaseAge}>Increase Age</button>
        <button onClick={decreasAge}>Decrease Age</button>
        </>
    )

}