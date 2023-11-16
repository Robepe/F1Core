import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    // Lógica de autenticación (puedes usar un backend para verificar credenciales).
    // Devuelve true si la autenticación es exitosa, false de lo contrario.
    return true;
  }

  logout(): void {
    // Lógica para cerrar sesión.
  }
}
