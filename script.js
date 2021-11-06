var startbutton = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var Stimetext = document.getElementById("timetext");
var Mtimetext = document.getElementById("Mintime");
var Htimetext = document.getElementById("Hourtime");
var intervalID = 0;
var Stime = 0;
var Mtime = 0;
var Htime = 0;
var on = false;
function addtime() {
  Stime++;
  Stimetext.innerText = Stime;
  Mtimetext.innerText = Mtime;
  Htimetext.innerText = Htime;
  if(Stime >= 60){
    Mtime++;
    Stime = 0;
  }
  if(Mtime >= 60){
    Htime++;
    Mtime = 0;
  }
}
function start() {
  if (intervalID == 0) intervalID = setInterval(addtime, 1000);
}
startbutton.addEventListener("click", start);
stop.addEventListener("click", () => {
  clearInterval(intervalID);
  intervalID = 0;
});
reset.addEventListener("click", () => {
  Stime = 0;
  Mtime = 0;
  Htime = 0;
  Stimetext.innerText = Stime;
  Mtimetext.innerText = Mtime;
  Htimetext.innerText = Htime;
  clearInterval(intervalID);
  intervalID = 0;
});
