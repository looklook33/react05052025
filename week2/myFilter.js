Array.prototype.myFilter = function (cb){
    let res =[];
    for (let i = 0; i < this.length; i++){
        if (cb(this[i])){
            res.push(this[i]);
        }
    }
    return res; 
};


const myFilter = [1,2,3,4,5,6].myFilter(
    
    function (ele){
        return (ele%2===0)
    }
)

console.log(myFilter)