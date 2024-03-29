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
    this.editedDriver = { ...this.driverData };
    console.log(this.driverData)

    this.editedDriver.imagePath = '../../assets/media/img/' + this.editedDriver.driverRef + '.avif';
  }

  saveChanges(): void {
    this.driverService.updateDriver(this.editedDriver.driverId, this.editedDriver)
      .subscribe(
        response => {
          console.log('Cambios guardados:', response);
          this.driverService.emitUpdateEvent();
          this.activeModal.close();
        },
        error => {
          console.error('Error al guardar cambios:', error);
        }
      );
  }
}


