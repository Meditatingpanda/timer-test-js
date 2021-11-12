var count=10;
var id=null;
var text=document.getElementById("txt");
var botton=document.getElementById("btn");
var countDown=document.getElementById("timer");
//console.log(botton);
var x=function (){
    text.innerHTML="Time Left";
    countDown.innerHTML=count+"s";
    count--;
    if(count<=0){
        text.innerHTML="Times Up!!";
        countDown.innerHTML='';
        clearInterval(id);
    }
}
var y=function (){
    count=10;
   id=setInterval(x,1000);
   return;
}
botton.addEventListener("click",y);