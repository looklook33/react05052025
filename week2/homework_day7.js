// Exercise 1: Basic Closures
// Create a function createGreeting(greeting) that takes a string greeting and returns a function.
// The returned function should take a name as an argument and return a string that
// combines the greeting and the name.


// function createGreeting(greeting) {
//     return function (name){
//         return greeting + " "+name;
//     }
// }
// const sayHello = createGreeting("Hello");
// console.log(sayHello("Alice"));  // Outputs: "Hello Alice"
// const sayHi = createGreeting("Hi");
// console.log(sayHi("Bob"));  // Outputs: "Hi Bob"

// Exercise 2: Counter
// Write a function createCounter() that initializes a counter to 0 and returns an object with two methods:
// increment() which increments the counter and returns the new value,
// and getValue() which returns the current value of the counter.


// function createCounter() {
//     let counter = 0;
//    return {
//         increment(){
//             counter++
//         return counter

//     },
//         getValue() {
//         return counter;
//     },
// }
// }
// let counter = createCounter();
// console.log(counter.getValue());  // Outputs: 0
// console.log(counter.increment());  // Outputs: 1
// console.log(counter.increment());  // Outputs: 2
// console.log(counter.getValue());  // Outputs: 2

// Exercise 3: Function Store
// Create a function functionStore() that allows you to store and retrieve functions by a key.
// It should return an object with two methods: store(key, fn) which stores the function fn
// under the string key, and run(key, ...args) that runs the function stored under key with
// the provided arguments.


// function functionStore() {
    // const funcs = {};

    // return {
    //     store(key, fn){
    //         funcs[key] =fn;
    //     },
    //     run(key, ...args){
    //         const fn = funcs[key]
    //         return fn(...args)

    //     }
    // }
// }
// // Example;
// let store = functionStore();
// store.store("add", (a, b) => a + b);
// console.log(store.run("add", 5, 7)); // Outputs: 12


// Exercise 4: Private Variables
// Write a function createPerson(name) that creates private variables and provides methods
// to access and modify them. This function should return an object with methods getName()
// to return the current name, and setName(newName) to set a new name.

// let person = createPerson("Alice");
// console.log(person.getName());  // Outputs: "Alice"
// person.setName("Bob");
// console.log(person.getName());  // Outputs: "Bob"

// function createPerson(name) {
//     return {
//         getName () {
//         return name;
//         },
//         setName(newName) {
//         name = newName;
//         }
//     } 
// }
// let person = createPerson("Alice");
// console.log(person.getName());  // Outputs: "Alice"
// person.setName("Bob");
// console.log(person.getName());  // Outputs: "Bob"


// Exercise 5: Limited Call Function
// Description: Write a function createLimitedCallFunction(fn, limit) that
// takes a function fn and a number limit as arguments. This returned function can only be
// called up to limit times. After the limit is reached, every subsequent call to this function
// should be ignored.


// function sayHello() {
//   console.log("Hello!");
// }

// function createLimitedCallFunction(fn, limit) {
//     let callTime = 0
//   //  console.log(callTime)
    
//     return function (){
//       if (limit>callTime){
//         callTime++
//       //  console.log(callTime)
//         return fn();
//     }
//     }

    
    
// }

// let limitedHello = createLimitedCallFunction(sayHello, 3);
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // Outputs: "Hello!"
// limitedHello(); // No output, subsequent calls are ignored

// Exercise 6: Rate Limiter
// Implement a function createRateLimiter(limit, interval) that limits how often a
// given function can be called. The function should return a new function that, when called,
// will invoke the original function only if a certain amount of time (interval in milliseconds)
// has passed since the last invocation. The limit parameter should specify how many times the function
// can be triggered within the given interval.

function logMessage(message) {
  console.log(message);
}

function createRateLimiter(fn, limit, interval) {
  let callTime = 0;
  // return function (message){
  //   if (limit>callTime){
  //     callTime++;
  //     setTimeout(()=>{return fn(message)},interval)
  //   }
  // }


  return function (message){
    if (limit>callTime){
      callTime++;
      setTimeout(()=>{fn(message)},interval)
    }
  }
}

let limitedLog = createRateLimiter(logMessage, 2, 1000); // Allow 2 calls every 10 seconds
limitedLog("Hello"); // "Hello" is logged
limitedLog("World"); // "World" is logged
limitedLog("Again"); // This call is ignored