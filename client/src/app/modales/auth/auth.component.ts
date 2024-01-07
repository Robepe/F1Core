import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    console.log(JSON.stringify(this.form.value, null, 2));

    const { username, password } = this.form.value;

    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data)
        this.storageService.saveUser(data);

        // Redirigir a la ruta deseada después de la autenticación
        this.router.navigate(['/layout/dashboard']);
      },
      error: err => {
        console.log(err.error.message);
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}