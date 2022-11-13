const timer = (selector, deadline) => {
    let countdown = Date.now() + (10 * 60 * 1000);

    const setZero = (time) => {
        return (time <= 9) ? `0${time}` : time;
    }

    const getTime = () => {
        // const timeNow = countdown - new Date(),

        const timeNow = Date.parse(deadline) - new Date(),
            seconds = Math.floor((timeNow / 1000) % 60),
            minutes = Math.floor((timeNow / 1000 / 60) % 60),
            hours = Math.floor((timeNow / 1000 / 60 / 60) % 60),
            days = Math.floor(timeNow / 1000 / 60 / 60 / 24);

        return {
            total: timeNow,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days,
        }
    };

    const setTimer = () => {
        const timerContainer = document.querySelector(selector),
            timerSeconds = timerContainer.querySelector("#seconds"),
            timerMinutes = timerContainer.querySelector("#minutes"),
            timerHours = timerContainer.querySelector("#hours"),
            timerDays = timerContainer.querySelector("#days"),
            timeInterval = setInterval(updateTimer, 1000);

        function updateTimer() {
            const t = getTime();

            timerSeconds.textContent = setZero(t.seconds);
            timerMinutes.textContent = setZero(t.minutes);
            timerHours.textContent = setZero(t.hours);
            timerDays.textContent = setZero(t.days);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                timerSeconds.textContent = "00";
                timerMinutes.textContent = "00";
                timerHours.textContent = "00";
                timerDays.textContent = "00";
            }
        }
        updateTimer()
    };

    setTimer();
}

export default timer;