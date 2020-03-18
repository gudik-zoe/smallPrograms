let firstInterval;
let halfsec = 1;
let seconds = 1;
let mins = 1;

function startt() {
  document.getElementById("start").disabled = true;
  firstInterval = setInterval(() => {
    document.getElementById("first").innerHTML = "0" + halfsec++;
    if (halfsec === 10 && seconds < 10) {
      halfsec = 0;
      document.getElementById("second").innerHTML = "0" + seconds++ + ":";
    } else if (halfsec === 10 && seconds >= 10) {
      document.getElementById("second").innerHTML = seconds++ + ":";
      halfsec = 0;
    } else if (seconds === 60 && halfsec === 9 && mins < 10) {
      seconds = 0;
      document.getElementById("third").innerHTML = "0" + mins++ + ":";
    } else if (seconds === 60 && halfsec === 9 && mins >= 10) {
      seconds = 0;
      document.getElementById("third").innerHTML = mins++ + ":";
    }
  }, 100);
}

function stop() {
  document.getElementById("start").disabled = false;
  clearInterval(firstInterval);
}

function reset() {
  clearInterval(firstInterval);
  document.getElementById("start").disabled = false;
  document.getElementById("first").innerHTML = "00";
  document.getElementById("second").innerHTML = "00" + ":" + " ";
  document.getElementById("third").innerHTML = "00" + ":" + " ";
  halfsec = 1;
  seconds = 1;
  mins = 1;
}
