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
  tiempoRestante: number = 0;
  tiempoFormateado: string = '';
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
      this.tiempoRestante = tiempoRestante;
      // Actualizamos la propiedad formateada para mostrar en la plantilla
      this.actualizarTiempoFormateado();
    });
  }

  private calcularTiempoRestante(): number {
    const ahora = new Date().getTime();
    return Math.floor((this.fechaObjetivo.getTime() - ahora) / 1000);
  }

  // Método para actualizar el tiempo formateado
  private actualizarTiempoFormateado(): void {
    const dias = Math.floor(this.tiempoRestante / (60 * 60 * 24));
    const horas = Math.floor((this.tiempoRestante % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((this.tiempoRestante % (60 * 60)) / 60);
    const segundos = this.tiempoRestante % 60;

    // Crear una cadena formateada y asignarla a una propiedad para mostrar en la plantilla
    this.tiempoFormateado = `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
  }
}
