Array.prototype.myMap = function (cb){
      res = [];
    for (let i = 0; i < this.length; i++){
         res.push(cb(this[i]));
    }
     return res; 
};

const newArr = [1,2,3,4].myMap(
    function (ele){
           ele = ele*2;
           return ele;
    }
)

console.log(newArr)