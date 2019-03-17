function whoIsInSpace(arr){

    var http = new XMLHttpRequest();
    http.open('GET' , `http://api.open-notify.org/astros.json`)
    
    http.onreadystatechange = function(){
       if ( http.readyState != XMLHttpRequest.DONE){
           return;
       }
       else if (http.status == 200){
        
        arr(http.responseText)
       }
       else{
           console.log("error occured" + http.status)
       }
    
    }
    http.send();
    }
    whoIsInSpace(function(data){

        var result =[]
            console.log(JSON.parse(data))
            var res = JSON.parse(data)
            res.people.map(function(person)
            {
                 result.push(person.name)
                
            })
            console.log(result)

    })