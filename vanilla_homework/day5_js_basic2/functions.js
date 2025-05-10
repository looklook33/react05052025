export function sum(num1=0,num2=0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
      if ( typeof num1 !== 'number' || typeof num2 !== 'number'){
      throw new Error();
    } 
    return num1+num2

}
// console.log(sum(1, 2))


export function sumOfAll(...nums) {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  // return (...nums) => {
    let res=0
    for (const num of nums){
      if (typeof num !== 'number'){
        throw new Error();
      } else if( num === undefined)
        {
          num = 0;
          res +=num
      } else{
         res +=num
      }
    }
    return res;
  // };
}
