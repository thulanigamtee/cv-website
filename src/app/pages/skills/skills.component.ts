import { Component } from '@angular/core';
import { ToContactPageComponent } from '../../components/to-contact-page/to-contact-page.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ToContactPageComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  languages: { name: string; src: string }[] = [
    {
      name: 'javascript',
      src: '/assets/skills/languages/javascript.svg',
    },
    {
      name: 'typescript',
      src: '/assets/skills/languages/typescript.svg',
    },
    {
      name: 'java',
      src: '/assets/skills/languages/language-java.svg',
    },
    {
      name: 'python',
      src: '/assets/skills/languages/python.svg',
    },
    {
      name: 'c++',
      src: '/assets/skills/languages/c-plusplus.svg',
    },
    {
      name: 'html',
      src: '/assets/skills/languages/html5.svg',
    },
    {
      name: 'CSS',
      src: '/assets/skills/languages/css3.svg',
    },
  ];

  frameworks: { name: string; src: string }[] = [
    { name: 'angular', src: '/assets/skills/frameworks/angular.svg' },
    { name: 'django', src: '/assets/skills/frameworks/django.svg' },
    { name: 'spring boot', src: '/assets/skills/frameworks/spring-boot.svg' },
    { name: 'tailwind', src: '/assets/skills/frameworks/tailwind.svg' },
    { name: 'react', src: '/assets/skills/frameworks/react.svg' },
    { name: 'nextjs', src: '/assets/skills/frameworks/nextjs.svg' },
    { name: 'ionic', src: '/assets/skills/frameworks/ionic.svg' },
    { name: 'bootstrap', src: '/assets/skills/frameworks/bootstrap.svg' },
  ];

  tools: { name: string; src: string }[] = [
    { name: 'vs code', src: '/assets/skills/tools/vscode.svg' },
    { name: 'intellij', src: '/assets/skills/tools/intellijidea.svg' },
    { name: 'github', src: '/assets/skills/tools/github.svg' },
    { name: 'postman', src: '/assets/skills/tools/postman.svg' },
    { name: 'postgresql', src: '/assets/skills/tools/postgresql.svg' },
    { name: 'firebase', src: '/assets/skills/tools/firebase.svg' },
    { name: 'figma', src: '/assets/skills/tools/figma.svg' },
    { name: 'netlify', src: '/assets/skills/tools/netlify.svg' },
    { name: 'expo', src: '/assets/skills/tools/expo.svg' },
  ];
}
