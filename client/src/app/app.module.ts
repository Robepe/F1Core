import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './modales/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PilotsComponent } from './components/pilots/pilots.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ResultsComponent } from './components/results/results.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { DetailDriverComponent } from './modales/drivers/detail-driver/detail-driver.component';
import { AddDriverComponent } from './modales/drivers/add-driver/add-driver.component';
import { AddConstructorComponent } from './modales/constructors/add-constructor/add-constructor/add-constructor.component';
import { DetailConstructorComponent } from './modales/constructors/detail-constructor/detail-constructor/detail-constructor.component';

// Crea una función para cargar las traducciones desde archivos JSON
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AuthComponent,
    DashboardComponent,
    SidebarComponent,
    MainLayoutComponent,
    PilotsComponent,
    TeamsComponent,
    ResultsComponent,
    NavbarComponent,
    CountdownComponent,
    DetailDriverComponent,
    AddDriverComponent,
    AddConstructorComponent,
    DetailConstructorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Agrega HttpClientModule para el uso de HttpLoaderFactory
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { 
  
}

