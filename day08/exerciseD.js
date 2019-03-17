class User{
    constructor(options){
        this.fname = options.name.first;
        this.lname = options.name.last;
        this.email = options.email;
        this.dob = options.dob.date;
    }
}
function informMe(callback){
    var http = new XMLHttpRequest();
    http.open('GET' , `https://randomuser.me/api/?results=5`)
    
    http.onreadystatechange = function(){
       if ( http.readyState != XMLHttpRequest.DONE){
           return;
       }
       else if (http.status == 200){

        callback(http.response)
       }
       else{
           console.log("error occured" + http.status)
       }
    
    }
    http.send();
    }


    informMe(function(data){
            console.log(JSON.parse(data))
        var person = JSON.parse(data)

        console.log(person.results.map(function(user){
            return new User(user)
        }));
        

        })