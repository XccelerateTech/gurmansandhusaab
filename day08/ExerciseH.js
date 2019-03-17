var elem = document.getElementsByTagName('button');
//for (var i = 0; i < elem.length; i++) {
elem[0].onclick = function() {
    elem[0].style.backgroundColor = "red";
    elem[0].innerHTML= 'buy flower';
            var result = document.getElementsByTagName('h1')
            result[0].innerHTML='welcome to flower shop';
            result[0].style.backgroundColor="orange"

    //alert('I was clicked'); // every time the user clicks on title an alert will pop u
};

var hovrs = document.getElementsByClassName('imge')

// for(i=0;i>Image.length; i++){

// }
for(let hovr of hovrs ){
hovr.addEventListener('mouseover', function() {
    hovr.style.width= "120px";
    hovr.style.height= "120px";
    // alert('I was hovered');
});
hovr.addEventListener('mouseout', function() {
    hovr.style.width= "50px";
    hovr.style.height= "50px";
    // alert('I was hovered');
});
}