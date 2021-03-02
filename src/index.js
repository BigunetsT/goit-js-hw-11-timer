import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.daysRef = document.querySelector(
      `${selector} .value[data-value="days"]`,
    );
    this.hoursRef = document.querySelector(
      `${selector} .value[data-value="hours"]`,
    );
    this.minsRef = document.querySelector(
      `${selector} .value[data-value="mins"]`,
    );
    this.secsRef = document.querySelector(
      `${selector} .value[data-value="secs"]`,
    );
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  countDown() {
    const currentTime = new Date();
    this.updateTimer(currentTime);
  }
  showTime() {
    setInterval(() => this.countDown(), 1000);
  }
  updateTimer(currentTime) {
    const time = this.targetDate - currentTime;
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.daysRef.textContent = `${days}`;
    this.hoursRef.textContent = `${hours}`;
    this.minsRef.textContent = `${mins}`;
    this.secsRef.textContent = `${secs}`;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer.showTime();
