var products=document.getElementById("product")
var searchvalue=document.getElementById("search")
var elements=products.querySelectorAll("div")

searchvalue.addEventListener("keyup",function(){
    var enteredtext=event.target.value.toUpperCase()
    for(i=0;i<elements.length;i++){
        var productname=elements[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredtext)<0){
            elements[i].style.display="none"
        }
        else{
            elements[i].style.display="block"
        }
    }
}

)
//select side navbar
var sidebar=document.querySelector(".side-navbar")
 
function shownavbar(){
    sidebar.style.left="0"
}
function closenavbar(){
    sidebar.style.left="-60%"
}
var btn=document.querySelectorAll(".buynow")
btn.forEach(function(button){
       button.addEventListener(
    "mouseover",function(){
        button.style.color="white";
        button.style.backgroundColor="black"
    })
    button.addEventListener(
        "mouseout",function(){
            button.style.color="black";
            button.style.backgroundColor="white"
        })
})