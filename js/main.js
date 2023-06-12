import User from "./User.js";
import Timer from "./Timer.js";

const minutesSpan = document.querySelector(".firestarter-cooldown .minutes");
const secondsSpan = document.querySelector(".firestarter-cooldown .seconds");
const delta = document.querySelector(".firestarter-cooldown .delta");
const user = new User();

let timer = new Timer(document.querySelector(".timer"), 1800);

user.fsCooldown = 1800;

const legionModifier = document.querySelector("#mercedes");

legionModifier.addEventListener("click", (e) => {
  if (e.target.type !== "radio") return;
  const minusCooldown = user.fsCooldown * Number(e.target.value);
  user.fsCooldown = 1800 - Math.floor(minusCooldown);
  timer = new Timer(document.querySelector(".timer"), user.fsCooldown);
  minutesSpan.textContent = String(Math.floor(user.fsCooldown / 60)).padStart(
    2,
    "0"
  );
  secondsSpan.textContent = String(user.fsCooldown % 60).padStart(2, "0");
  delta.textContent = `(-${Math.floor(minusCooldown)}s)`;
});

const burningFieldBtn = document.querySelector(".burning-field-button");

burningFieldBtn.addEventListener("click", () => {
  user.burningFieldIntervals = user.setFieldIntervals();
  const intervalSpan = document.querySelector(
    ".firestarter__section--intervals span"
  );
  intervalSpan.textContent = user.burningFieldIntervals;
});
