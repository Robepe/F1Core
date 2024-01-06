import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private authService: AuthService) { }

  login(username: string, password: string): void {
    const isAuthenticated = this.authService.login(username, password);

    if (isAuthenticated) {
      // Redirecciona al usuario a la página principal después de iniciar sesión.
      // Puedes usar el enrutador de Angular para la navegación.
    } else {
      // Muestra un mensaje de error o toma alguna acción en caso de autenticación fallida.
    }
  }
}