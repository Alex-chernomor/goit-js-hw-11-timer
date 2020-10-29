
class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = (new Date(targetDate));

  }
  timer() {
    let timir = document.querySelector(this.selector)
    let daysSpan = timir.querySelector('.days');
    let hoursSpan = timir.querySelector('.hours');
    let minutesSpan = timir.querySelector('.minutes');
    let secondsSpan = timir.querySelector('.seconds');
    
    
    setInterval(()=>{
      const startTime = Date.now();
      const deltaTime = this.targetDate-startTime ; 
      const days = pad(Math.floor((deltaTime / (1000 * 60 * 60 * 24))));
      const hours = pad(Math.floor((deltaTime % (1000*60*60*24))/(1000*60*60)));
      const mins = pad(Math.floor((deltaTime % (1000*60*60))/(1000*60)));
      const secs = pad(Math.floor((deltaTime % (1000*60))/1000));
      
      daysSpan.textContent = days;
      hoursSpan.textContent = hours;
      minutesSpan.textContent = mins;
      secondsSpan.textContent = secs;
    },1000);
    
  };
}
const time2 = new CountdownTimer('#countdown', '2022, 11, 28');
const time3 = new CountdownTimer('#countdown2', '2020, 10, 30');


time2.timer();
time3.timer();

function pad(value){
return String(value).padStart(2,'0')
}



