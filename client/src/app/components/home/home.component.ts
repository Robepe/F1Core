import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthComponent } from '../../modales/auth/auth.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private translate: TranslateService,  private modalService: NgbModal) { }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  openAuthModal() {
    const modalRef = this.modalService.open(AuthComponent, { ariaLabelledBy: 'modal-basic-title' });

    // modalRef.result.then(
    //   (result) => {
    //     // Código que se ejecuta al cerrar el modal
    //   },
    //   (reason) => {
    //     // Código que se ejecuta al cerrar el modal con un motivo específico
    //   }
    // );
  }

  cards = [
    {
      title: 'Card 1',
      description: 'Descripción de la tarjeta 1',
    },
    {
      title: 'Card 2',
      description: 'Descripción de la tarjeta 2',
    },
    {
      title: 'Card 3',
      description: 'Descripción de la tarjeta 3',
    },
  ];
}
