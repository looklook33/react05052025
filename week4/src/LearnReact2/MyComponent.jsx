import React,{useState} from "react";

export default function MyComponentFoods(){
    const [foods, setFoods] = useState(['Apple', "Orange","Banana"]);

    function handelAddFood(){
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value ='';
        setFoods(foods=>[...foods,newFood])
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=>i!==index))
    }

    return (
        <div>
            <h2>List Of Food</h2>
            <ul>
                {foods.map((food,index)=><li key={index} onClick={()=>handleRemoveFood(index)}
                style={{color: food ==="Apple"? "red":"black"}}>{food}</li>)}
            </ul>
            <input type="text" id='foodInput' placeholder="Enter Food Name"/>
            <button onClick={handelAddFood}>Add Food</button>
        </div>
    )
}