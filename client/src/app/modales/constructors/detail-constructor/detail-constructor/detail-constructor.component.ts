import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConstructorService } from 'src/app/services/constructors/constructor-service.service';

@Component({
  selector: 'app-detail-constructor',
  templateUrl: './detail-constructor.component.html',
  styleUrls: ['./detail-constructor.component.css']
})
export class DetailConstructorComponent implements OnInit {
  @Input() constructorData: any;
  editedConstructor: any;

  constructor(public activeModal: NgbActiveModal, private constructorService: ConstructorService) { }

  ngOnInit(): void {
    this.editedConstructor = { ...this.constructorData };
    console.log(this.editedConstructor)

    this.editedConstructor.imagePath = '../../assets/media/img/' + this.editedConstructor.constructorRef + '.avif';
  }

  saveChanges(): void {
    this.constructorService.updateConstructor(this.editedConstructor.constructorId, this.editedConstructor)
      .subscribe(
        response => {
          console.log('Cambios guardados:', response);
          this.constructorService.emitUpdateEvent();
          this.activeModal.close();
        },
        error => {
          console.error('Error al guardar cambios:', error);
        }
      );
  }
}
