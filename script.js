const holidayday = document.querySelector(".day");
const holidayhour = document.querySelector(".hour");
const holidayminut = document.querySelector(".min");
const holidaysecund = document.querySelector(".sec");
const holiday = new Date(2022, 09, 01);

const secund = 1000;
const minut = 60 * secund;
const hour = 60 * minut;
const day = 24 * hour;

const timer = function () {
    const times = new Date().getTime();
    const distance = holiday - times;

    const daysLeft = Math.floor(distance / day);
    const hoursLeft = Math.floor((distance % day / hour));
    const minutsLeft = Math.floor((distance % hour / minut));
    const secundLeft = Math.floor((distance % minut / secund));

    holidayday.textContent = daysLeft;
    holidayhour.textContent = hoursLeft;
    holidayminut.textContent = minutsLeft;
    holidaysecund.textContent = secundLeft;
}

setInterval(timer, 1000);