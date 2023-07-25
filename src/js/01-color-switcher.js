const body = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

buttonStart.addEventListener('click', changeBodyColor);
function changeBodyColor() {
    buttonStart.disabled = !buttonStart.disabled;
    changerColor = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();


    }, 1000);

}

buttonStop.addEventListener('click', stopChaning);

function stopChaning() {
    clearInterval(changerColor);
    if (buttonStart.disabled) {
        buttonStart.disabled = !buttonStart.disabled;
    }
}