import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DriverService } from 'src/app/services/drivers/driver-service.service';

import { AddDriverComponent } from '../../modales/drivers/add-driver/add-driver.component';
import { DetailDriverComponent } from '../../modales/drivers/detail-driver/detail-driver.component';

@Component({
    selector: 'app-pilots',
    templateUrl: './pilots.component.html',
    styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit, OnChanges {
    drivers: any[] = [];
    searchTerm: string = '';
    filteredDrivers: any[] = [];
    showSuccessAlert: boolean = false;
    showErrorAlert: boolean = false;

    constructor(private driverService: DriverService, private modalService: NgbModal) { };

    ngOnInit(): void {
        this.getDrivers();
        this.driverService.getUpdateEvent().subscribe(() => {
            this.getDrivers();
        });
        this.filteredDrivers = this.drivers;
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filteredDrivers = this.drivers;
    }

    getDrivers(): void {
        this.driverService.getDrivers().subscribe(
            drivers => {
                this.drivers = drivers;
                this.filteredDrivers = this.drivers;  // Asignación dentro de la suscripción
            },
            error => {
                console.error('Error al obtener conductores:', error);
            }
        );
    }

    mostrarDetalles(driver: any): void {
        const modalRef = this.modalService.open(DetailDriverComponent, { size: 'xl' });
        modalRef.componentInstance.driverData = driver;
    }

    addDriver(): void {
        const modalRef = this.modalService.open(AddDriverComponent, { ariaLabelledBy: 'modal-basic-title' });

        modalRef.result.then(
            (newDriver) => {
                if (newDriver) {
                    console.log("newDriver", newDriver)
                    this.driverService.addDriver(newDriver).subscribe(
                        (createdDriver) => {
                            console.log('Nuevo Driver creado:', createdDriver);
                            this.getDrivers();
                            this.showSuccessAlert = true;
                            setTimeout(() => {
                                this.showSuccessAlert = false;
                            }, 3000);

                        },
                        (error) => {
                            console.error('Error al crear el Driver:', error);
                            this.showErrorAlert = true;
                            setTimeout(() => {
                                this.showSuccessAlert = false;
                            }, 3000);
                        }
                    );
                }
            },
            (reason) => {
                // Manejar el cierre del modal sin datos (si es necesario)
            }
        );
    }

    deleteDriver(driverId: number): void {
        this.driverService.deleteDriver(driverId)
            .subscribe(
                response => {
                    console.log('Conductor eliminado con éxito:', response);
                    this.getDrivers()
                },
                error => {
                    console.error('Error al eliminar conductor:', error);
                }
            );
    }

    filterDrivers(): void {
        this.filteredDrivers = this.drivers.filter(d =>
            d.surname.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    }
}
