
// let emptyArray=[];
// for(let elem of array){
//     elem
// }


function processArray(arrr, cb){
    emptyArray=[];
    for(let i=0 ; i<arrr.length;i++){
        emptyArray.push(cb(arrr[i]))

    }

    console.log( emptyArray);


}


var myArray = [4, 8, 2, 7, 5];
processArray(myArray, function(a) {
    return a * 2;
});