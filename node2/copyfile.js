var fs = require ('fs');

// var abc = fs.readFileSync(__dirname+'/text.txt', 'utf8');
function copy(path){
var def = fs.createReadStream(__dirname + path,{encoding:'utf8', highWaterMark: 32*1024});
var cat = fs.createWriteStream(__dirname + '/day1/textcopy.txt');
def.pipe(cat);
}
copy('/text.txt')