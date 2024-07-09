
function updateClock(){
    const now=new Date();
    let hour=now.getHours();
    const meridian=hour>12?"PM" : "AM";
    hour=hour%12 || 12;
    hour=hour.toString().padStart(2,0);
    const min=now.getMinutes().toString().padStart(2,0);
    const sec=now.getSeconds().toString().padStart(2,0);
    const timeString=`${hour}:${min}:${sec}`
    document.getElementById("clock").textContent=timeString;
}
updateClock();
setTimeout(updateClock,1000);