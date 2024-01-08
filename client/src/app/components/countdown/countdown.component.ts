
import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  nombre: string = "";
  season: number = 0;
  fechaObjetivo: Date = new Date('2024-03-02T14:00:00');
  fechaPartida: Date = new Date('2023-11-26T14:00:00'); // ha de ser la fecha objetivo de la ronda anterior
  tiempoRestante: number = 0;
  tiempoFormateado: string = '';
  porcentajeRestante: number = 0;
  private intervalo$: Observable<number>;
  rondaActual: number = 1; // Puedes inicializarlo con el valor que necesites
  rondaAnterior: number = 1;

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
      console.log(this.porcentajeRestante)
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

/*
import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { RaceService } from 'src/app/services/races.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  nombre: string = "";
  season: number = 0;
  fechaObjetivo: Date = new Date(); // Inicializado con la fecha actual
  fechaPartida: Date = new Date('2023-11-26T14:00:00'); // ha de ser la fecha objetivo de la ronda anterior
  tiempoRestante: number = 0;
  tiempoFormateado: string = '';
  porcentajeRestante: number = 0;
  private intervalo$: Observable<number>;
  rondaActual: number = 1; // Puedes inicializarlo con el valor que necesites
  rondaAnterior: number = 1;

  constructor(private raceService: RaceService) {
    this.intervalo$ = new Observable<number>();
  }

  ngOnInit(): void {
    this.obtenerProximaCarrera();

    const tiempoTotal = this.calcularTiempoTotal(); // Guardamos el tiempo total inicial
    this.tiempoRestante = this.calcularTiempoRestante();
    console.log(this.tiempoRestante);

    this.intervalo$ = interval(1000).pipe(
      map(() => this.calcularTiempoRestante()),
      takeWhile(tiempoRestante => tiempoRestante >= 0)
    );

    this.intervalo$.subscribe(tiempoRestante => {
      console.log('Intervalo ejecutándose');
      this.tiempoRestante = tiempoRestante;
      this.actualizarTiempoFormateado();

      // Calculamos el porcentaje restante
      console.log(tiempoTotal)
      this.porcentajeRestante = ((tiempoTotal - tiempoRestante) / tiempoTotal) * 100;
      console.log(this.porcentajeRestante)
    });
  }

  private calcularTiempoRestante(): number {
    const ahora = new Date().getTime();
    const tiempoRestante = Math.floor((this.fechaObjetivo.getTime() - ahora) / 1000);

    if (tiempoRestante <= 0) {
      // Si el tiempo restante es menor o igual a cero, cambia a la siguiente ronda
      this.cambiarARondaSiguiente();
    }

    return tiempoRestante;
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

  private obtenerProximaCarrera(): void {
    console.log('Entrando a obtenerProximaCarrera');
    console.log('Ronda actual:', this.rondaActual);
    console.log('Ronda anterior:', this.rondaAnterior);
    this.raceService.getProximaCarrera(this.rondaActual).subscribe(
      (proximaCarrera) => {
        this.fechaObjetivo = new Date(proximaCarrera.date + 'T' + proximaCarrera.time);

        // Si estamos en la primera ronda, fechaPartida debe ser la fecha objetivo de la ronda anterior
        if (this.rondaActual > 1) {
          this.raceService.getProximaCarrera(this.rondaAnterior).subscribe(
            (rondaAnterior) => {
              this.fechaPartida = new Date(rondaAnterior.date + 'T' + rondaAnterior.time);
              this.actualizarContador();
            },
            (error) => {
              console.error('Error al obtener la ronda anterior', error);
            }
          );
        } else {
          this.fechaPartida = new Date('2023-11-26T14:00:00'); // fecha objetivo de la ultima ronda de 2023
          this.actualizarContador();
        }

        this.rondaActual = Number(proximaCarrera.round);
        this.season = Number(proximaCarrera.year);
        this.nombre = String(proximaCarrera.name);
        this.rondaAnterior = this.rondaActual - 1;
        console.log('Ronda anterior:', this.rondaAnterior)
        console.log(this.fechaObjetivo); // ok
        console.log('Fecha objetivo después de la actualización:', this.fechaObjetivo);
        console.log('Fecha partida después de la actualización:', this.fechaPartida);
        // Otros datos...
      },
      (error) => {
        console.error('Error al obtener la próxima carrera', error);
      }
    );
  }

  private actualizarContador(): void {
    console.log('Entrando a actualizarContador');
    const tiempoTotal = this.calcularTiempoTotal();

    this.intervalo$ = interval(1000).pipe(
      map(() => this.calcularTiempoRestante()),
      takeWhile(tiempoRestante => tiempoRestante >= 0)
    );

    this.intervalo$.subscribe(tiempoRestante => {
      console.log('Intervalo ejecutándose');
      console.log('Tiempo restante:', tiempoRestante);
      this.tiempoRestante = tiempoRestante;
      this.actualizarTiempoFormateado();

      // Calculamos el porcentaje restante
      console.log('Tiempo total:', tiempoTotal);
      this.porcentajeRestante = ((tiempoTotal - tiempoRestante) / tiempoTotal) * 100;
      console.log('Porcentaje restante2:', this.porcentajeRestante);
    });
  }

  private cambiarARondaSiguiente(): void {
    this.rondaActual += 1;  // Aumenta la ronda actual
    this.obtenerProximaCarrera();  // Actualiza la información para la próxima carrera
  }
  // Resto del código...
}
*/

