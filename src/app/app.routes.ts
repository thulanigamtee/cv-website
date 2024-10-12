import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { component: HomeComponent, path: '' },
  {
    path: 'info',
    loadComponent: () =>
      import('./pages/info/info.component').then((c) => c.InfoComponent),
  },
  {
    loadComponent: () =>
      import('./pages/skills/skills.component').then((c) => c.SkillsComponent),
    path: 'skills',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(
        (c) => c.ProjectsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
  },
  {
    path: 'education',
    loadComponent: () =>
      import('./pages/education/education.component').then(
        (c) => c.EducationComponent
      ),
  },
  {
    path: 'education/edit/:id',
    loadComponent: () =>
      import('./components/education-form/education-form.component').then(
        (c) => c.EducationFormComponent
      ),
  },
  {
    path: 'education/new',
    loadComponent: () =>
      import('./components/education-form/education-form.component').then(
        (c) => c.EducationFormComponent
      ),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./pages/experience/experience.component').then(
        (c) => c.ExperienceComponent
      ),
  },
  {
    path: 'experience/edit/:id',
    loadComponent: () =>
      import('./components/experience-form/experience-form.component').then(
        (c) => c.ExperienceFormComponent
      ),
  },
  {
    path: 'experience/new',
    loadComponent: () =>
      import('./components/experience-form/experience-form.component').then(
        (c) => c.ExperienceFormComponent
      ),
  },
];
