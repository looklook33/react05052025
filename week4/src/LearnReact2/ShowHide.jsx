import { useState } from "react";

export default function ShowHide(){
    const [showText, setShowText] = useState(true);
    const [textColor, setTextColor] = useState("red")
    const [random, setRandom] = useState(0);
    const [items, setItems] = useState(["itme1", "item2", "item3"])

    function handleAddItem(){
        const newItem = document.getElementById('itemInput').value;
        document.getElementById('itemInput').value='';
        setItems(items=>[...items,newItem])
    }
    return (
        <>
        <button 
        onClick={()=>{setShowText(!showText)}}>Show/Hide</button>
        <br/>
        {showText && <h3>My name is Minyu</h3>}
        <br/>
        <button 
        onClick={()=>setTextColor(textColor === "black"? "red":"black")}
        style={{color:textColor, fontSize:20}}
        >Red/Black</button>
        <br/>
        <p>Random Number: {random}</p>
        <button onClick={()=>{setRandom(Math.random())}}>Random number</button>

        <div>{items.map((item,index)=><li key={index}>
            <label>
                <input type="checkbox">
                </input>
                {item}
            </label>
            </li>)}</div>
    
        <button onClick={handleAddItem}>Add item</button>
        </>


    )
}