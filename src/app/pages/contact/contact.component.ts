import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.required]],
      message: ['', Validators.required],
    });
  }

  socials: { name: string; src: string; url: string }[] = [
    { name: 'github', src: '/assets/icons/github.svg', url: '/github' },
    { name: 'twitter', src: '/assets/icons/twitter.svg', url: '/twitter' },
    { name: 'linkedin', src: '/assets/icons/linkedin.svg', url: '/linkedin' },
  ];
}
