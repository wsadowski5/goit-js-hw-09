
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }



const body = document.querySelector('body')
const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop')

btnStop.toggleAttribute('disabled',)

let timerId = null

const btnDisabledToggler = () => {
    btnStop.toggleAttribute('disabled',);
    btnStart.toggleAttribute('disabled',);
    
}

btnStart.addEventListener('click', () => {
    btnDisabledToggler()
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    },1000)
}
)

btnStop.addEventListener ('click', () => {
    btnDisabledToggler();
    clearInterval(timerId);
})


