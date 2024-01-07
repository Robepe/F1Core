import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	username: string = '';

	constructor(private storageService: StorageService, private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
		const user = this.storageService.getUser();
		this.username = user.username;
	}

	logout(): void {
		console.log("1")
		this.authService.logout().subscribe({
			next: res => {
				console.log("2")
				console.log(res);
				this.storageService.clean();

				// window.location.reload();
				this.router.navigate(['/']);
			},
			error: err => {
				console.log(err);
			}
		});
	}
}
