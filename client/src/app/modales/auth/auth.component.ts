import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from '../../services/storage.service';

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private storageService: StorageService) { }

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

    /*if (this.form.invalid) {
      return;
    }*/

    console.log(JSON.stringify(this.form.value, null, 2));

    const { username, password } = this.form.value;

    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data)
        this.storageService.saveUser(data);

        //this.isLoginFailed = false;
        //this.isLoggedIn = true;
        //this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        console.log(err.error.message);
        //this.errorMessage = err.error.message;
        //this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}