let personame = require("./pname.js");
let number = require("./pno.js");
let rectarea=require("./rectanglearea.js")
let hello = require("./assign.js")


// rectarea(2,6);
// personame();
// number();
// console.log(hello(7));
var Start = require("./timerutils.js").start;
var pause = require("./timerutils.js").pause;
var stop = require("./timerutils.js").stop;
let Timer = require("./timerD.js");
const timer = new Timer();

timer.on('tick' , function(resttime){
    if (resttime == 0 ){
        return console.log("kaboom");
    }
    console.log('time remaining = ' +  resttime)
})
Start(timer, 5);
setTimeout(()=> pause(timer), 2000);
setTimeout(()=> Start(timer), 3000);
setTimeout(() => stop(timer), 8000);