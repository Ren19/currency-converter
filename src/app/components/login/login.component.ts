import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  onSubmit() {
    if (this.username && this.password) {
      this.apiService.login({ username: this.username, password: this.password }).subscribe(
        response => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/converter']);
        },
        error => {
          this.errorMessage = 'Error en el inicio de sesión. Por favor, verifica tu nombre de usuario y contraseña.';
        }
      );
    } else {
      this.errorMessage = 'Se requieren nombre de usuario y contraseña.';
    }
  }
}
