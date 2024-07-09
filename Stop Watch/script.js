const display = document.getElementById("display");

let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    starttime = Date.now() - elapsedtime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  clearInterval(timer);
  elapsedtime = Date.now() - starttime;
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  starttime = 0;
  elapsedtime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const curr = Date.now();
  elapsedtime = curr - starttime;

  let hour = Math.floor(elapsedtime / (1000 * 60 * 60));
  let min = Math.floor((elapsedtime / (1000 * 60)) % 60);
  let sec = Math.floor((elapsedtime / 1000) % 60);
  let milli = Math.floor((elapsedtime % 1000) / 10);

  hour = String(hour).padStart(2, "0");
  min = String(min).padStart(2, "0");
  sec = String(sec).padStart(2, "0");
  milli = String(milli).padStart(2, "0");

  display.textContent = `${hour}:${min}:${sec}:${milli}`;
}
