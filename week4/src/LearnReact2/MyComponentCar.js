import { useState } from "react";

export default function MyComponentCar() {
  const [car, setCar] = useState({
    year: 2000,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event) {
    setCar((car) => ({ ...car, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar((car) => ({ ...car, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((car)=>({...car, model:event.target.value}))
  }

  return (
    <div>
      <h2>
        My favorite car is : {car.year} {car.make} {car.model}
      </h2>
      <input type="number" value={car.year} onChange={handleYearChange}/>
      <input type="text" value={car.make} onChange={handleMakeChange}/>
      <input type="text" value={car.model} onChange={handleModelChange}/>
    </div>
  );
}