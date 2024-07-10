const box=document.getElementById("box")

box.addEventListener("click",event=>{
    event.target.style.backgroundColor="tomato"
    event.target.textContent="OUCH!";
});

box.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor="yellow"
    event.target.textContent="DON'T!";
});

box.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor="green"
    event.target.textContent="CLICK ME";
});