let firstInterval;
let secondInterval;
let thirdInterval;
let fourthInterval;
let secs;
let mins;
let audio = new Audio("VID-20200318-WA0062(mp3)-[AudioTrimmer.com] (1).mp3");

document.getElementById("here").innerHTML = "00" + ":" + "00";
function start() {
  secs = parseInt(document.getElementById("seconds").value);
  mins = parseInt(document.getElementById("minutes").value);

  if (secs > 0 && mins === 0) {
    firstInterval = setInterval(() => {
      document.getElementById("here").innerHTML =
        "00" + ":" + ("0" + secs--).slice(-2);
      if (secs < 0) {
        clearInterval(firstInterval);
        document.getElementById("here").innerHTML = "Attention!";
        audio.play();
      }
    }, 1000);
  }

  if (mins > 0 && secs === 0) {
    secs = 59;
    mins = mins - 1;
    secondInterval = setInterval(() => {
      document.getElementById("here").innerHTML =
        ("0" + mins).slice(-2) + ":" + ("0" + secs--).slice(-2);
      if (mins != 0 && secs === 0) {
        mins = mins - 1;
        secs = 59;
        document.getElementById("here").innerHTML =
          ("0" + mins).slice(-2) + ":" + ("0" + secs--).slice(-2);
      } else if (mins === 0 && secs === 0) {
        clearInterval(secondInterval);
        document.getElementById("here").innerHTML = "time's up";
      }
    }, 1000);
  } else if (mins != 0 && secs != 0) {
    thirdInterval = setInterval(() => {
      document.getElementById("here").innerHTML =
        ("0" + mins).slice(-2) + ":" + ("0" + secs--).slice(-2);
      if (secs === -2 && mins != 0) {
        mins = mins - 1;
        secs = 59;
        document.getElementById("here").innerHTML =
          ("0" + mins).slice(-2) + ":" + ("0" + secs--).slice(-2);
      } else if (mins === 0 && secs === 0) {
        clearInterval(thirdInterval);
        document.getElementById("here").innerHTML = "time's up";
      }
    }, 1000);
  }
}
function stop() {
  clearInterval(secondInterval);
  clearInterval(firstInterval);
  clearInterval(thirdInterval);
}
function reset() {
  document.getElementById("here").innerHTML = "";
  document.getElementById("seconds").innerHTML = " ";
  document.getElementById("here").innerHTML = "00" + ":" + "00";
}
