import { useState } from "react";

export default function MyComponentCarObj() {
  let [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('')

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value)
  }

  function handleAddCar(){
    const newCar = {year: carYear, make: carMake, model: carModel}
    setCars(c=>[...c, newCar])

    // console.log(cars)
  }

  function handleRemoveCar(index){
    setCars(c=>c.filter((_, i) =>i!==index))
  }
  return (
    <div>
      <h2>
        List of Car Objecst: 
        <ul >
            {cars.map((car, index)=>
            <li key={index} onClick={()=>handleRemoveCar(index)}>
               {car.year} {car.model} {car.make}
            </li>)}

        </ul>
      </h2>
      <input type="number" value={carYear} onChange={handleYearChange}/>
      <input type="text" value={carMake} onChange={handleMakeChange}
      placeholder="Enter Car Make"/>
      <input type="text" value={carModel} onChange={handleModelChange}
      placeholder="Enter Car Model"/>
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}
