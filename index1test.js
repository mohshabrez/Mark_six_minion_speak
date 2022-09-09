
// var name = prompt("Type your name here?")
// alert("Welcome"+ name)
var clickhere = document.querySelector("#button");

clickhere.addEventListener("click",clickHandler)

function clickHandler(){
    console.log("clicked");
}