const display = document.getElementById("display");
let timer = null;
let startime = 0;
let elapasedTime = 0;
let isRunnige = false;

function start() {
  if (!isRunnige) {
    startime = Date.now() - elapasedTime;
    timer = setInterval(update, 10);
    isRunnige = true;
  }
}

function stop() {
  if (isRunnige) {          
    clearInterval(timer);
    elapasedTime = Date.now() - startime;
    isRunnige = false;
  }
}

function reset() {
  clearInterval(timer);
  startime = 0;
  elapasedTime = 0;
  isRunnige = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const currentTime = Date.now();
  elapasedTime = currentTime - startime;

  let hours = Math.floor(elapasedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapasedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapasedTime / 1000) % 60);
  let milleseconds = Math.floor((elapasedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milleseconds = String(milleseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milleseconds}`;
}