let random = function getRandomInt(min, max) {
    min=1;
    max=26;

    return Math.floor(Math.random() * (max - min + 1)) + min;
       
}
module.exports = random;