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
}
