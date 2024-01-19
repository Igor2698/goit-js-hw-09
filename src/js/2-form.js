const form = document.querySelector('.feedback-form');

setDatesFromLocaleStorage();

function setDatesFromLocaleStorage() {
    const datesFromLocalStorage = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

    form.elements.email.value = datesFromLocalStorage.email || '';
    form.elements.message.value = datesFromLocalStorage.message || '';
    return datesFromLocalStorage;
}

form.addEventListener('input', onInputForm);

function onInputForm(ev) {
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const message = form.elements.message.value.trim();
    const email = form.elements.email.value.trim();
    if (!message || !email) {
        return alert('All fields must be completed');
    }
    console.log(setDatesFromLocaleStorage());
    localStorage.removeItem('feedback-form-state');
    form.reset();
}
)


