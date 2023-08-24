const minute = document.getElementById("minute");
const second = document.getElementById("second");
const startBtn = document.getElementById("startBtn");
const input = document.getElementById("input");

let m = input;
let s = 60;

const startTimer = () => {
  setInterval(() => {
    if (s > 0) {
      s--;
      m.value;
    } else if (s <= 0) {
      s = 59;
      m.value--;
    }

    minute.innerHTML = m.value;
    second.innerHTML = s < 10 ? `0${s}` : s;
  }, 1000);
};
