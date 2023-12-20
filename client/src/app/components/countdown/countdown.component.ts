import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})

export class CountdownComponent implements OnInit {
  fechaObjetivo: Date = new Date('2023-12-31T23:59:59');
  tiempoRestante: number = 0; // inicializado con un valor predeterminado
  private intervalo$: Observable<number>;

  constructor() {
    this.intervalo$ = new Observable<number>();
  }

  ngOnInit(): void {
    this.intervalo$ = interval(1000).pipe(
      map(() => this.calcularTiempoRestante()),
      takeWhile(tiempoRestante => tiempoRestante >= 0)
    );

    this.intervalo$.subscribe(tiempoRestante => {
      this.tiempoRestante = tiempoRestante; // actualiza el valor de tiempoRestante
      const dias = Math.floor(tiempoRestante / (60 * 60 * 24));
      const horas = Math.floor((tiempoRestante % (60 * 60 * 24)) / (60 * 60));
      const minutos = Math.floor((tiempoRestante % (60 * 60)) / 60);
      const segundos = tiempoRestante % 60;

      console.log(`${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`);
    });
  }

  private calcularTiempoRestante(): number {
    const ahora = new Date().getTime();
    const tiempoRestante = Math.floor((this.fechaObjetivo.getTime() - ahora) / 1000);
    return tiempoRestante;
  }
}
