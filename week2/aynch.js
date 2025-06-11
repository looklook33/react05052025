// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("reject")
//     },1000)

// });

// p.then(data =>{
//     console.log(data)
// }).catch((err)=>{
//     console.log('Error: ', err)
// })

// console.log('async');

async function foo(){
    try {
    const data = await p; //await is used in aysnc function to pause the execution of that function until a promise is rejected or resolved
  //const numer = await 5; putting await before a non-primese value is pointless 
    console.log(data);
    console.log('sync')

    } catch(err){
        console.log("promise is rejected: ", err)
    }

}

// foo()

//.then returns a promise, that resolves to the callback's return value
// Promise.resolve(5).then((value)=>{
//     console.log(value);

//      return 4;
// }).then((value)=>{
//     console.log(value);

//     return 3;

// }).then((data)=>{
//     console.log(data)
//     // throw new Error('Error')
// }).catch((err)=>{
//     console.log(err)
// })

// console.log(p)

const getBeef = async () =>{ return 'beef';};
const cookBeef = async (beef) =>{
    if (beef === 'beef'){
        return 'patty';
    } else {
        throw new Error('Missing beef!')
    }
};
const getBuns = async () =>{ return 'buns';};
const putBeefBetweenBuns = async (buns, patty) =>{
    if (buns ==='buns'&& patty==='patty'){
        return 'burger'
    } else {
        throw new Error('Missing ingredent!')
    }   
};

// getBeef().then((beef)=>{
//    // console.log(beef);
//     const patty = cookBeef(beef);
//    // console.log(patty)
//     return patty
// }).then((patty)=>{
//     const buns = getBuns()
//     // console.log(patty);
//     return {patty, buns:'buns'};
// }).then(({patty, buns})=>{
//     console.log(patty, buns)
//     return putBeefBetweenBuns(buns, patty)
// }).then((burger)=>{
//     console.log(burger)
// })
// console.log(beef)


const makeBurger = async () =>{
    const beef = await getBeef();
    console.log(beef)
    const patty = await cookBeef(beef);
    console.log(patty)
    const buns = await getBuns();
    console.log(buns)
    const burger = await putBeefBetweenBuns(buns, patty);
    console.log(burger)
    return burger;

}
makeBurger()