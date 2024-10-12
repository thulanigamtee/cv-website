import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-to-contact-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './to-contact-page.component.html',
  styleUrl: './to-contact-page.component.scss',
})
export class ToContactPageComponent {}
