import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit, OnDestroy {

  constructor() {
  }

  public days = 0;
  public hours = 0;
  public minutes = 0;
  public seconds = 0;
  private countDownDate: number;
  private now: number;
  private intervalId = 0;
  message = '';
  remainingTime: number;

  @Input() endDay: Date;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
    this.countDown();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  reset() {
    this.clearTimer();
    this.message = '';
  }

  private countDown() {
    this.clearTimer();
    this.countDownDate = new Date(this.endDay).getTime();
    this.now = new Date().getTime();
    this.remainingTime = this.countDownDate - this.now;
    this.intervalId = window.setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime -= 1000;
        this.days = Math.floor(this.remainingTime / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((this.remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((this.remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((this.remainingTime % (1000 * 60)) / 1000);
      } else {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.message = ': Đã kết thúc';
      }
    }, 1000);
  }
}
