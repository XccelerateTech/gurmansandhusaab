let random = require('./random.js');
let random_lutter = require('./randomletter.js');
 
var hello = function vakhre(lgth){
    let text='';
    for(let i=0; i<lgth; i++){
        
        text += random_lutter(random());
        
    }
    
    return text;
    // console.log(text); 
    
}
module.exports = hello;