import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DriverService } from 'src/app/services/drivers/driver-service.service';

@Component({
  selector: 'app-detail-driver',
  templateUrl: './detail-driver.component.html',
  styleUrls: ['./detail-driver.component.css']
})
export class DetailDriverComponent implements OnInit {
  @Input() driverData: any;
  editedDriver: any;

  constructor(public activeModal: NgbActiveModal, private driverService: DriverService) {}

  ngOnInit(): void {
    // Copia los datos del conductor para realizar ediciones sin afectar los datos originales
    this.editedDriver = { ...this.driverData };
  }

  saveChanges(): void {
    this.driverService.updateDriver(this.editedDriver.driverId, this.editedDriver)
      .subscribe(
        response => {
          console.log('Cambios guardados:', response);
          // Puedes cerrar el modal después de guardar los cambios si es apropiado
          this.activeModal.close();
        },
        error => {
          console.error('Error al guardar cambios:', error);
          // Maneja el error según sea necesario
        }
      );
  }
}


