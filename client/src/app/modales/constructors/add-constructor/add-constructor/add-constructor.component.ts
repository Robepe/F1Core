import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-constructor',
  templateUrl: './add-constructor.component.html',
  styleUrls: ['./add-constructor.component.css']
})
export class AddConstructorComponent {
  newConstructor: any = {
    constructorRef: '',
    name:'',
    nationality: '',
    url: ''
  };

  constructor(public activeModal: NgbActiveModal) { }

  createConstructor(): void {
    console.log('this.newConstructor', this.newConstructor)
    this.activeModal.close(this.newConstructor);
  }
}