import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('[data-start]')
const daysValue = document.querySelector('[data-days]')
const hoursValue = document.querySelector('[data-hours]')
const minutesValue = document.querySelector('[data-minutes]')
const secondsValue = document.querySelector('[data-seconds]')


startBtn.setAttribute('disabled',true)

function convertMs(ms) {
    // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
    
    // Remaining days
      const days = Math.floor(ms / day);
    // Remaining hours
      const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
      return { days, hours, minutes, seconds };
    }


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < options.defaultDate){
            alert('Please choose a date in the future')
        }
        else {
            startBtn.removeAttribute('disabled',true);
            startBtn.addEventListener('click', () => {
              setInterval(() =>{
                let remainingTime = (selectedDates[0]) - (new Date());
                
                do {
                  function addLeadingZero (value){

                  const stringDays = convertMs(remainingTime).days.toString();
                  const stringHours = convertMs(remainingTime).hours.toString();
                  const stringMinutes = convertMs(remainingTime).minutes.toString();
                  const stringSeconds = convertMs(remainingTime).seconds.toString();

                  const prependedDays = stringDays.padStart(value, '0')
                  const prependedHours = stringHours.padStart(value, '0')
                  const prependedMinutes = stringMinutes.padStart(value, '0')
                  const prependedSeconds = stringSeconds.padStart(value, '0')

                  daysValue.textContent = prependedDays
                  hoursValue.textContent = prependedHours
                  minutesValue.textContent = prependedMinutes
                  secondsValue.textContent = prependedSeconds
                  }

                  addLeadingZero(2)

                  
                }
                while (remainingTime < 0)
                
              }, 1000)
            })
        }
      }
  };



flatpickr('#datetime-picker', options) 

