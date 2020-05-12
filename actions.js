/*
author: William Almond
site: almondproperties.com
org: Nuthouse Web Solutions, 2016
*/

var myIndex = 0;
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modImg = document.getElementById("img01");

img.onclick = function(){
    modal.style.display = "block";
    // modImg.src = this.src;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
    modal.style.display = "none";
}
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 9000);
}
