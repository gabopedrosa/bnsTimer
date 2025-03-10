import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {  DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GuideComponent } from './guide.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DialogService],
})
export class AppComponent implements OnInit {
  canais = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    inputValue: '',
    timer: null,
    timerDisplay: null,
  }));

  title = 'front';
  dialogRef: DynamicDialogRef | null = null;

  constructor(private cdRef: ChangeDetectorRef, private dynamicDialogService: DialogService) {}

  ngOnInit(): void {
    this.loadTimersFromLocalStorage();
  }

  openGuideDialog() {
    this.dialogRef = this.dynamicDialogService.open(GuideComponent, {
      header: 'How to Use the Application',
      width: '50%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000,
    });
  }

  startTimer(index: number, minutes: number): void {
    const totalTime = minutes * 60;
    let remainingTime = totalTime;
  
    if (this.canais[index].timer) {
      clearInterval(this.canais[index].timer);
    }
  
    this.canais[index].timerDisplay = remainingTime;
    this.updateLocalStorage();
  
    this.canais[index].timer = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime--;
        this.canais[index].timerDisplay = remainingTime;
        this.updateLocalStorage();
      } else {
        clearInterval(this.canais[index].timer);
        this.canais[index].timer = null;
        this.updateLocalStorage();
        this.playAlertSound();
      }
    }, 1000);
  }
  resetTimer(index: number): void {
    if (this.canais[index].timer) {
      clearInterval(this.canais[index].timer);
    }
    this.canais[index].timer = null;
    this.canais[index].timerDisplay = null;
    this.updateLocalStorage();
  }
  updateLocalStorage(): void {
    const timersData = this.canais.map(canal => ({
      timerDisplay: canal.timerDisplay,
    }));
    localStorage.setItem('timers', JSON.stringify(timersData));
  }
  loadTimersFromLocalStorage(): void {
    const savedTimers = localStorage.getItem('timers');
    if (savedTimers) {
      const timersData = JSON.parse(savedTimers);
      timersData.forEach((data: { timerDisplay: number }, index: number) => {
        if (data.timerDisplay > 0) {
          this.resumeTimer(index, data.timerDisplay);
        }
      });
    }
  }
  resumeTimer(index: number, remainingTime: number): void {
    this.canais[index].timerDisplay = remainingTime;
  
    this.canais[index].timer = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime--;
        this.canais[index].timerDisplay = remainingTime;
        this.updateLocalStorage();
      } else {
        clearInterval(this.canais[index].timer);
        this.canais[index].timer = null;
        this.updateLocalStorage();
        this.playAlertSound();
      }
    }, 1000);
  }  
  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }

  get sortedChannels() {
    return this.canais
      .map((canal, index) => ({ ...canal, index }))
      .filter(canal => canal.timerDisplay > 0)
      .sort((a, b) => a.timerDisplay - b.timerDisplay)
      .slice(0, 13);
  }
  
  
  get isAnyTimerRunning() {
    return this.canais.some(canal => canal.timerDisplay > 0);
  }
  
  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  getFormattedInputValue(index: number): string {
    const canal = this.canais[index];
    return canal.inputValue ? canal.inputValue + ' ' + (canal.timerDisplay ? this.formatTime(canal.timerDisplay) : '') : '';
  }

  playAlertSound(): void {
    const audio = new Audio('assets/alert.mp3');
    audio.play();
  }
}
