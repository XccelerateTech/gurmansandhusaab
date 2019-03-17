
function informMe(endpoint, value,callback){
var http = new XMLHttpRequest();
http.open('GET' , `https://restcountries.eu/rest/v2/${endpoint}/${value}`)

http.onreadystatechange = function(){
   if ( http.readyState != XMLHttpRequest.DONE){
       return;
   }
   else if (http.status == 200){
    console.log (JSON.parse(http.responseText))
   }
   else{
       console.log("error occured" + http.status)
   }

}
http.send();
}
informMe('language','english',function(data){
        console.log(JSON.parse(data))
})