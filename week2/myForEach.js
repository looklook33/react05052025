Array.prototype.myforEach = function (cb){
    for (let i = 0; i< this.length; i++){
        cb(this[i], i, this)
    }
};

[10,20,30].myforEach(
    function (element, i, arr){
        console.log(`element: ${element} at index ${i} from this arr [${arr}]`)
    }
)

