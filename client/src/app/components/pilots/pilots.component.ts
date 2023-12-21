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
}
