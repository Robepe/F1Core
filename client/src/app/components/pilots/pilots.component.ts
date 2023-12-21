import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/drivers/driver-service.service';

@Component({
    selector: 'app-pilots',
    templateUrl: './pilots.component.html',
    styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {
    drivers: any[] = [];

    constructor(private driverService: DriverService) { };

    ngOnInit(): void {
        this.getDrivers();
    }

    getDrivers(): void {
        this.driverService.getDrivers().subscribe((data) => {
            this.drivers = data;
        });
    }

    mostrarDetalles(driver: any): void {
        console.log(`Detalles del piloto: ${JSON.stringify(driver)}`);
        // Aquí puedes abrir un modal o realizar otras acciones según tus necesidades.
      }
}
