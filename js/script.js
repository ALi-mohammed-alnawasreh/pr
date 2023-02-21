alert("If you purchase devices for $5,000 or more, there is a 3% discount.")
var total=0

var btn =document.querySelectorAll("#list li input")
var contint=document.querySelector("#contint")
var addto=document.querySelector("#show")
btn.forEach(function(item){

  item.onclick=function(){
    total+=parseInt(item.getAttribute("price"), 10)

    contint.innerHTML+="*)"+item.getAttribute("value")+"  ";

    
    if(contint.innerHTML !=""){
      addto.style.display="block"
    }
  }

})
addto.onclick=function(){
if(total>4999){

  alert("the total price = "+total+" ..."+" The price after discount = "+(total-(total/100)*3))
}
else{
  
    alert("the total price = "+total)
  }
}
