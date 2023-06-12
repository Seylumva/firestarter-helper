export default class User {
  constructor() {
    this.fsCooldown = 1800;
    this.burningFieldIntervals = null;
  }

  setFieldIntervals() {
    const minutes = new Date().getMinutes();
    const intervals = [];
    for (let i = 0; i < 4; i++) {
      intervals.push("xx:" + String((minutes + 15 * i) % 60).padStart(2, "0"));
    }
    return intervals.join(" / ");
  }
}
