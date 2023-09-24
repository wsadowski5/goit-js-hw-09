function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log(`Fulfilled promise ${position} in ${delay}ms`)
  } else {
    console.log(`Rejected promise ${position} in ${delay}ms`)
  }
}


const firstDelay = document.querySelector('input[name="delay"]')
const delayStep = document.querySelector('input[name="step"]')
const amount = document.querySelector('input[name="amount"]')
const createPromiseBtn = document.querySelector('button[type=submit]')


const createHandler = (event) => {
  event.preventDefault()
  for ( let i = 1; i <= amount.value; i++ ) {
    let position = i
    let delay = Number(firstDelay.value) + Number(delayStep.value*(i-1));

      setTimeout(() => {
        createPromise(position,delay)
      }, delay)
    
 }
}

createPromiseBtn.addEventListener('click',createHandler)

