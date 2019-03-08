for(let i =1; i<=30; i++){
  if (i%3 === 0){
    console.log( 'hong')
  }
  else if (i%5 == 0) {
    console.log('kong')
  }
  else if(i%3 === 0 && i%5 ===0){
    console.log( 'hong kong')
  }
  else {
    console.log (i)
  }
}