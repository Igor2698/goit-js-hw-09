import Notiflix from 'notiflix';
const form = document.querySelector('.form')
const inputAmount = document.querySelector('[name="amount"]');
const firstDelay = document.querySelector('[name="delay"]');
const stepDelay = document.querySelector('[name="step"]');



form.addEventListener('submit', (event) => {
  let initialDelayValue = Number(firstDelay.value);
  let PromiseDelay = initialDelayValue;
  let isFirstIteration = true;
  event.preventDefault();
  for (let i = 1; i <= inputAmount.value; i += 1) {
    if (!isFirstIteration) {
      PromiseDelay += Number(stepDelay.value);
    }

    createPromise(i, PromiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`); 
      });

    isFirstIteration = false;
  }
});




function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {

      if (shouldResolve) {
        const obj = { position, delay }
        resolve(obj)
      } else {

        const obj = { position, delay }
        reject(obj)
      }
    }, delay);

  });
}






