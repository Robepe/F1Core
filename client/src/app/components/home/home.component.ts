import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private translate: TranslateService) { }

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
