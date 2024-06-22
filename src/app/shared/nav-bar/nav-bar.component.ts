import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router) { }
  navigateToAbout() {
    this.router.navigate(['/about']);
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }

  navigateToProducts() {
    this.router.navigate(['/products']);
  }

  navigateToRailings() {
    this.router.navigate(['/railings']);
  }

  navigateToBrochures() {
    this.router.navigate(['/brochures']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}