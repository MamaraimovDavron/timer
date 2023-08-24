const minute = document.getElementById("minute");
const second = document.getElementById("second");
let m = 24;
let s = 59;

const timeStart = () => {
  setInterval(() => {
    if (s > 0) {
      s--;
      m;
    } else if (s <= 0) {
      s = 59;
      m--;
    }

    minute.innerHTML = m;
    second.innerHTML = s < 10 ? `0${s}` : s;
  }, 1000);
};
