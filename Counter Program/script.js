
const decBtn=document.getElementById("dec")
const resetBtn=document.getElementById("reset")
const incBtn=document.getElementById("inc")
const countlabel=document.getElementById("countlabel")
let count=0;

incBtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
decBtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}