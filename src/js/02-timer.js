import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
// 
const startButton = document.querySelector('[data-start]');
startButton.disabled = true;
startButton.addEventListener('click', showTimer);
const valueOfDays = document.querySelector('[data-days]');
const valueOfHours = document.querySelector('[data-hours]');
const valueOfMinutes = document.querySelector('[data-minutes]');
const valueOfSeconds = document.querySelector('[data-seconds]');
const values = [valueOfDays, valueOfHours, valueOfMinutes, valueOfSeconds];
let selectedDate;
const commonDiv = document.querySelector('.timer');
const divsField = document.querySelectorAll('.field')


// Common classes
commonDiv.style.setProperty("display", "flex");
commonDiv.style.setProperty("gap", "25px");

divsField.forEach(element => {
    element.style.setProperty("display", "flex");
    element.style.setProperty("flex-direction", "column")
    element.style.setProperty("text-align", "center")
});

for (let i = 0; i < values.length; i += 1) {
    values[i].style.setProperty("font-size", "25px")
}




let diferInTime = 0;
flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0];
        if (selectedDate < new Date()) {
            Notiflix.Notify.warning('Please choose a date in the future');

            startButton.disabled = true;
            return
        } else {
            startButton.disabled = false;
            setInterval(() => {
                const date = new Date();
                diferInTime = selectedDate - date;
            }, 1000)
        }

    },
});


function convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}

function showTimer() {
    setInterval(() => {
        if (diferInTime <= 0) {
            return
        }
        console.log(diferInTime)
        const result = convertMs(diferInTime);
        valueOfDays.textContent = addLeadingZero(result.days);
        valueOfHours.textContent = addLeadingZero(result.hours);
        valueOfMinutes.textContent = addLeadingZero(result.minutes);
        valueOfSeconds.textContent = addLeadingZero(result.seconds);

        function addLeadingZero(value) {
            return String(value).padStart(2, '0')
        }

    }, 1000)
}

