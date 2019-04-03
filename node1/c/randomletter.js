let letter = "abcdefghijklmnopqrstuvwxyz";

var random_lutter = function random_letter(number) {
   
    var ans ='';
    ans = letter[number % 26 ];    
    console.log(ans)
    return ans
}

// random_lutter(0);

module.exports= random_lutter;