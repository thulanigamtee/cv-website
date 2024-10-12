import { Component } from '@angular/core';
import { ToContactPageComponent } from '../../components/to-contact-page/to-contact-page.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToContactPageComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
