export default class Timer {
  constructor(root, remainingSeconds) {
    this.resetSeconds = remainingSeconds;
    root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: root.querySelector(".timer__btn--start"),
      volume: root.querySelector(".timer--volume"),
    };

    this.volume = 0.35;
    this.interval = null;
    this.remainingSeconds = remainingSeconds;

    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });

    this.el.volume.addEventListener("change", (e) => {
      this.volume = e.target.value;
    });

    this.updateInterfaceTime();
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    this.el.volume.value = this.volume;
  }

  updateInterfaceControls() {
    if (this.interval === null) {
      this.el.control.innerHTML = `<span>Cast</span>`;
      this.el.control.classList.add("timer__btn--start");
      this.el.control.classList.remove("timer__btn--stop");
    } else {
      this.el.control.innerHTML = `<span>Reset</span>`;
      this.el.control.classList.add("timer__btn--stop");
      this.el.control.classList.remove("timer__btn--start");
    }
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        const audio = new Audio("./assets/beep.mp3");
        audio.volume = this.volume;
        audio.play();
        this.stop();
      }
    }, 1000);

    this.updateInterfaceControls();
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
    this.remainingSeconds = this.resetSeconds;
    this.updateInterfaceTime();
    this.updateInterfaceControls();
  }

  static getHTML() {
    return `
			<div class="timer__screen">
        <span class="timer__part timer__part--minutes">00</span>
			  <span class="timer__part">:</span>
			  <span class="timer__part timer__part--seconds">00</span>
      </div>
			<button type="button" class="button timer__btn--start">
				<span>Cast</span>
			</button>
      <label for="volume">Volume:</label>
      <input id="volume" class="timer--volume" type="range" min="0" max="1" step="0.05">
		`;
  }
}
