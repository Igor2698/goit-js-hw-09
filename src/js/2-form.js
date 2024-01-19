const form = document.querySelector('.feedback-form');

setDatesFromLocaleStorage();

function setDatesFromLocaleStorage() {
    const datesFromLocalStorage = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

    form.elements.email.value = datesFromLocalStorage.email || '';
    form.elements.message.value = datesFromLocalStorage.message || '';
    return datesFromLocalStorage;
}

form.addEventListener('input', onSubmitClick);

function onSubmitClick(ev) {
    ev.preventDefault();

    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    console.log(setDatesFromLocaleStorage());
    localStorage.removeItem('feedback-form-state');
    form.reset();
}
)


