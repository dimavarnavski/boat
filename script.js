let size=0;
let right=document.getElementById("right");
let left=document.getElementById("left");
let texter=document.getElementsByClassName("texter")[0];
let CommentRight=document.getElementById("CommentRight");
let CommentLeft=document.getElementById("CommentLeft");
let important=document.getElementById("important");
let calls=document.getElementById("calls");
console.log(right,left,texter);
right.onclick=function(){
 console.log("right");
 size=size+100;
 size=size%(texter.children.length*100);
 texter.style.transform="translateX(-"+size+"%)";
}
left.onclick=function(){
 size=size-100;
 size=size%(texter.children.length-1)*100;
 texter.style.transform="translateX(+"+size+"%)";
}
CommentRight.onclick=function(){
 let activePair=document.getElementsByClassName("activePair")[0];
 let Nextpair
 if(activePair.nextElementSibling.classList[0]=="pair"){
    Nextpair= activePair.nextElementSibling;
   }
   else{
    Nextpair=pairs[0];
  }
 activePair.classList.remove("activePair")
 setTimeout(function(){
    Nextpair.classList.add("activePair") 
 },400);
}
CommentLeft.onclick=function(){
    let activePair=document.getElementsByClassName("activePair")[0];
    let prevPair;
    if (activePair.previousElementSibling){
     prevPair=activePair.previousElementSibling;
    }
    else{
     prevPair=fedbacks[fedbacks.length-1];
    }
    activePair.classList.remove("activePair");
    setTimeout(function(){
      prevPair.classList.add("activePair")
    },400);
   }
 important.onclick=function() {
   important.style.transform="translateY(100%) scale(0)";
 }
 calls.onclick=function() {
   important.style.transform="translateY(0) scale(1)";
 }
 important.children[0].onclick = function(event){
  event.stopPropagation();
 }