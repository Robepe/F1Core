import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  fechaObjetivo: Date = new Date('2024-03-02T14:00:00');
  fechaPartida: Date = new Date('2023-11-26T14:00:00');
  tiempoRestante: number = 0;
  tiempoFormateado: string = '';
  porcentajeRestante: number = 0;
  private intervalo$: Observable<number>;

  constructor() {
    this.intervalo$ = new Observable<number>();
  }

  ngOnInit(): void {
    const tiempoTotal = this.calcularTiempoTotal(); // Guardamos el tiempo total inicial

    this.intervalo$ = interval(1000).pipe(
      map(() => this.calcularTiempoRestante()),
      takeWhile(tiempoRestante => tiempoRestante >= 0)
    );

    this.intervalo$.subscribe(tiempoRestante => {
      this.tiempoRestante = tiempoRestante;
      this.actualizarTiempoFormateado();

      // Calculamos el porcentaje restante
      this.porcentajeRestante = ((tiempoTotal - tiempoRestante) / tiempoTotal) * 100;
    });
  }

  private calcularTiempoRestante(): number {
    const ahora = new Date().getTime();
    return Math.floor((this.fechaObjetivo.getTime() - ahora) / 1000);
  }

  private calcularTiempoTotal(): number {
    return Math.floor((this.fechaObjetivo.getTime() - this.fechaPartida.getTime()) / 1000);
  }

  private actualizarTiempoFormateado(): void {
    const dias = Math.floor(this.tiempoRestante / (60 * 60 * 24));
    const horas = Math.floor((this.tiempoRestante % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((this.tiempoRestante % (60 * 60)) / 60);
    const segundos = this.tiempoRestante % 60;

    this.tiempoFormateado = `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
  }
}
