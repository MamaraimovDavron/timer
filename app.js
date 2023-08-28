const minute = document.getElementById("minute");
const second = document.getElementById("second");
const startBtn = document.getElementById("startBtn");
const input = document.getElementById("input");
const todaysDate = document.getElementById("todaysDate");
const date = new Date();
// startBtn.disabled = false;

// console.log(date);

todaysDate.innerHTML = `Today is ${date.getUTCDate()} of august`;

let m = input;
let s = 60;

const startTimer = () => {
  setInterval(() => {
    if (m.value < 0 || m.value == "") {
      return;
    } else if (s > 0 && m.value - 1 >= 0) {
      s--;
      m.value;
    } else if (s <= 0 && m.value - 1 >= 0) {
      s = 59;
      m.value--;
    } else {
      s = 0;
    }

    minute.innerHTML = m.value - 1 < 0 ? 0 : m.value - 1;
    second.innerHTML = s < 10 ? `0${s}` : s;

    localStorage.setItem("minute", m.value - 1);
    localStorage.setItem("second", s);
  }, 1000);

  startBtn.setAttribute("disabled", "!disabled");
};
