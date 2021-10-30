export default class User {
    constructor() {
        this.fsCooldown;
        this.burningFieldIntervals = null;

        // this.client = new Client();
    }

    setFieldIntervals() {
        const minutes = new Date().getMinutes();
        const intervals = [];
        intervals.push("xx:" + minutes);
        for (let i = 1; i < 4; i++) {
            intervals.push(
                "xx:" + String((minutes + 15 * i) % 60).padStart(2, "0")
            );
        }
        return intervals.join(" / ");
    }
}
