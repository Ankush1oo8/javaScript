let user;
user=window.prompt("Type something")
console.log(user)

document.getElementById("submit").onclick=function(){
    user=document.getElementById("text").value;
    console.log(user)
    document.getElementById("H1").textContent=`WELCOME ${user}`
}