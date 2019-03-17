function Player (name,health)
{
    this.name =name;
    this.health = health;
    this.attack = function(enemy){
        console.log(`${this.name} has attacked ${enemy.name}`)
        return enemy.health -=10;
    }
    this.heal = function(){
        console.log(`${this.name} + 5 health `)
        return this.health +=5;
    }
}

//var player= new Player('Name','health')
//console.log(player)

var gurman = new Player("gurman", 100)
var gurman1 = new Player("so-so", 100)

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  console.log(getRandomInt(2))
  
  function result(player,player1){
      let lastattack =null;
      let count = 0;

while( player.health>0 && player1.health>0){
    
    var hit = getRandomInt(2)
    if(hit === 0){
        player.attack(player1)
        console.log(player1.name + ' has ' + player1.health + ' health left');
        if (player === lastattack) {
            count ++;
            if (count % 3 === 0) {
                player.heal();
            } 
        } 
        else {
            lastattack = player;
            count = 1;
         } 
        }
    else{
        player1.attack(player)
        console.log(player.name + ' has ' + player.health + ' health left');
        if (player1 === lastattack) {
            count ++;
            if (count % 3 === 0) {
                player1.heal();
            } 
        } else {
            lastattack = player1;
            count = 1;
    }

}
 }
if (player.health = 0){
    console.log(player1.name + ' is the winner!');
} else {
    console.log(player.name + ' is the winner!');
  }
 
}
  console.log(result(gurman,gurman1))
