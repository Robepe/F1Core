import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private translate: TranslateService) { }

  // Función para traducir la pagina
  changeLanguage(language: string) {
    this.translate.use(language);
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
