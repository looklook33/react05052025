const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {

 const values = Object.values(people);
 let res = 0;
  
  for (let i = 0; i < values.length;i++){
    console.log(values[i].age)
    res+=values[i].age
}

return res/values.length;
};
