import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  routes: { name: string; path: string }[] = [
    { name: 'home', path: '' },
    { name: 'info', path: 'info' },
    { name: 'education', path: 'education' },
    { name: 'experience', path: 'experience' },
    { name: 'skills', path: 'skills' },
    { name: 'projects', path: 'projects' },
    { name: 'contact', path: 'contact' },
  ];

  isActive: boolean = false;
  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
