import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent {
  newDriver: any = {
    driverRef: 0,
    number: 0,
    code: '',
    forename: '',
    surname: '',
    dob: '',
    nationality: '',
    url: ''
  };

  constructor(public activeModal: NgbActiveModal) { }

  createDriver(): void {
    console.log('this.newDriver', this.newDriver)
    this.activeModal.close(this.newDriver);
  }
}

