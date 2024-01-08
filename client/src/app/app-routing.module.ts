import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthGuard } from './services/auth-guard.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PilotsComponent } from './components/pilots/pilots.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ResultsComponent } from './components/results/results.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'layout', component: MainLayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'pilots', component: PilotsComponent, canActivate: [AuthGuard] },
      { path: 'teams', component: TeamsComponent, canActivate: [AuthGuard] },
      { path: 'results', component: ResultsComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
