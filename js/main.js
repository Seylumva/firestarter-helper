import User from "./User.js";

const user = new User();

user.fsCooldown = 1800;

const mercedesInputs = document.querySelectorAll(
    '#mercedes input[name="mercedes"]'
);
for (let input of mercedesInputs) {
    input.addEventListener("change", () => {
        user.fsCooldown = 1800;
        const minusCooldown = user.fsCooldown * Number(input.value);
        user.fsCooldown -= Math.floor(minusCooldown);
        const minutesSpan = document.querySelector(
            ".firestarter-cooldown .minutes"
        );
        const secondsSpan = document.querySelector(
            ".firestarter-cooldown .seconds"
        );
        minutesSpan.textContent = String(
            Math.floor(user.fsCooldown / 60)
        ).padStart(2, "0");
        secondsSpan.textContent = String(user.fsCooldown % 60).padStart(2, "0");
    });
}

const burningFieldBtn = document.querySelector(".burning-field-button");

burningFieldBtn.addEventListener("click", () => {
    user.burningFieldIntervals = user.setFieldIntervals();
    const intervalSpan = document.querySelector(
        ".firestarter__section--intervals span"
    );
    intervalSpan.textContent = user.burningFieldIntervals;
});
