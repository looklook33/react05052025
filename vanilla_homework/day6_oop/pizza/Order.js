// Create an Order class that takes in an array of Pizza instances and has the following methods:
// - addPizza(pizza): adds a pizza to the order.
// - removePizza(index): removes a pizza from the order at the given index.
// - getTotalCost(): returns the total cost of all pizzas in the order.
// - updateStatus(newStatus): updates the status of the order.
// The Order class should have the following properties:
// - pizzas: an array of Pizza instances.
// - status: a string representing the status of the order. Default value is "pending".

export default class Order {
  constructor() {
    this.pizzas = [];
    this.status = "pending";
  }

  addPizza(pizza) {
   return this.pizzas.push(pizza)

  }

  removePizza(index) {
     return this.pizzas.splice(index,1);
  }

  getTotalCost() {
    let cost = 0;
    for (let i = 0; i< this.pizzas.length; i++){
        cost += this.pizzas[i].getTotalCost()
    }
    return cost;
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }
}
