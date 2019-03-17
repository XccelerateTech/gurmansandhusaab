const alphabet = 'jabcdefgh'

function transform(number){
    
    var newStr = number.split('');
     var result = newStr.reduce(function(acc, c){
            acc.push(alphabet[c]);
            return acc;
     },[])

     result.sort();
     var sortedresult = result.join('');
     return sortedresult;

}

transform('341652354')