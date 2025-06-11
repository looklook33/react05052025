// Create a Pizza class that takes in a size and an array of topping codes.
// The class should have the following methods:
// - getBaseCost(): returns the base cost of the pizza based on the size.
// - getTotalCost(): returns the total cost of the pizza including the base cost and the cost of the toppings.
// - getDescription(): returns a string that describes the pizza in the following format:
//   "A {size} pizza with {topping1}, {topping2}, {topping3}."
//   Example: "A medium pizza with pepperoni, green pepper."

// size: "small", "medium", "large"
// their costs: 6.5, 7.5, 8.5

// Example toppingCodes
// {
//   p: { cost: 1.5, name: "pepperoni" },
//   g: { cost: 0.86, name: "green pepper" },
// };

 const BASE_PRICE = {
  small: 6.5,
  medium: 7.5,
  large: 8.5,
};

const TOPPINGS = {
  p: { cost: 1.5, name: "pepperoni" },
  g: { cost: 0.86, name: "green pepper" },
  o: { cost: 0.5, name: "onion" },
  bo: { cost: 0.2, name: "black olive" },
  m: { cost: 0.82, name: "mushroom" },
  c: { cost: 0.77, name: "cheese" },
};

 class Pizza {
  constructor(size, toppingCodes) {
    this.size = size;
    this.toppingCodes = toppingCodes;
  }

  getBaseCost() {
    if (this.size === 'small'){
      return 6.5;
    } else if (this.size === 'medium'){
      return 7.5
    } else (this.size === 'large')
      return 8.5
  }

  getTotalCost() {
    let toppingCoast = 0;

    for ( let topping of this.toppingCodes){
        if (topping === 'p'){
            toppingCoast+=1.5;
        } else if (topping === 'g'){
            toppingCoast+=0.86
        } else if (topping === 'o'){
            toppingCoast+=0.5
        } else if (topping === 'bo'){
            toppingCoast+=0.2
        } else if (topping === 'm'){
            toppingCoast+=0.82
        } else if (topping === 'c')
            toppingCoast+=0.77     
    }


    return this.getBaseCost() + toppingCoast;
    
  }

  getDescription() {
    const values = Object.values(this.toppingCodes) 
    let topText=[]
    // console.log("values:", values)
    
    for (let top of values){
        if (top === 'p'){
            topText.push('pepperoni')
        } else if (top === 'g'){
            topText.push('green pepper')
        }  else if (top === 'o'){
            topText.push('onion')
        }  else if (top === 'bo'){
            topText.push('black olive')
        }  else if (top === 'm'){
            topText.push('mushroom')
        } else if (top === 'c'){
            topText.push('cheese')
        }
    }

    // console.log(topText)
    // const topText = values.filter(top => top===TOPPINGS)
    return `A ${this.size} pizza with ${topText.join(', ')}.`
  }
}

 const myPizza = new Pizza('medium', ['p','g','m'])
// console.log(myPizza.getBaseCost())
// console.log(myPizza.getTotalCost())
console.log(myPizza.getDescription())


// const people = {
//   1: { name: "Alice", age: 25 },
//   2: { name: "Bob", age: 30 },
//   3: { name: "Charlie", age: 35 },
// };

// // get the average age of the people
// const getAverageAge = (people) => {
//  const values = Object.values(people);
//  let res = 0;
  
//   for (let i = 0; i < values.length;i++){
//     console.log(values[i].age)
//     res+=values[i].age
// }

// return res/values.length;

// };

// console.log(getAverageAge(people))

// Create an Order class that takes in an array of Pizza instances and has the following methods:
// - addPizza(pizza): adds a pizza to the order.
// - removePizza(index): removes a pizza from the order at the given index.
// - getTotalCost(): returns the total cost of all pizzas in the order.
// - updateStatus(newStatus): updates the status of the order.
// The Order class should have the following properties:
// - pizzas: an array of Pizza instances.
// - status: a string representing the status of the order. Default value is "pending".

// class Order {
//   constructor() {
//     this.pizzas = [];
//     this.status = "pending";
//   }

//   addPizza(pizza) {
//    return this.pizzas.push(pizza)

//   }

//   removePizza(index) {
//      return this.pizzas.splice(index,1);
//   }

//   getTotalCost() {
//     // return this.pizzas.reduce((accum, curr)=>(accum+curr.getTotalCost(),0))
//     let cost = 0;
//     for (let i = 0; i< this.pizzas.length; i++){
//         cost += this.pizzas[i].getTotalCost()
//     }
//     return cost;
//   }

//   updateStatus(newStatus) {
//     this.status = newStatus;
//   }
// }

// const pizza1 = new Pizza("small", ["p", "c"]);
// const pizza2 = new Pizza("large", ["m", "g", "bo"]);

// const myOrder = new Order();
// myOrder.addPizza(pizza1);
// myOrder.addPizza(pizza2);

// console.log(myOrder.getTotalCost());  // Calculates total cost
// myOrder.updateStatus("in progress");
// console.log(myOrder.status);          // "in progress"
// console.log(myOrder.pizzas.length);   // 1
// myOrder.removePizza(0);
// console.log(myOrder.pizzas.length);   // 1
