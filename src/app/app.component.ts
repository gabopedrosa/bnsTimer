import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  canais = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    inputValue: '',
    timer: null,
    timerDisplay: null
  }));

  title = 'front';

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Inicialização, você pode fazer algo aqui se precisar.
  }

  startTimer(index: number, minutes: number): void {
    // Converte minutos para segundos
    const totalTime = minutes * 60;
    let remainingTime = totalTime;

    // Se já existir um temporizador, limpa antes de iniciar um novo
    if (this.canais[index].timer) {
      clearInterval(this.canais[index].timer);
    }

    // Atualiza imediatamente o timerDisplay
    this.canais[index].timerDisplay = remainingTime;
    this.cdRef.detectChanges();  // Forçar a atualização imediata do DOM

    // Cria um novo temporizador
    this.canais[index].timer = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime--;
        this.canais[index].timerDisplay = remainingTime;
      } else {
        clearInterval(this.canais[index].timer);
        this.canais[index].timer = null;
      }
    }, 1000);
  }

  // Função para formatar o tempo em MM:SS
  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }

  // Função para garantir que o número tenha dois dígitos
  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  getFormattedInputValue(index: number): string {
    const canal = this.canais[index];
    return canal.inputValue ? canal.inputValue + ' ' + (canal.timerDisplay ? this.formatTime(canal.timerDisplay) : '') : '';
  }
}
