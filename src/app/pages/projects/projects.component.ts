import { Component, OnInit } from '@angular/core';
import { ToContactPageComponent } from '../../components/to-contact-page/to-contact-page.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { Project } from '../../models/project.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ToContactPageComponent,
    TimelineComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Weather Forecasting App',
      description:
        'A simple weather app providing real-time weather data and forecasts for different locations.',
      technologies: ['Angular', 'OpenWeatherMap API', 'SCSS'],
      features: [
        'Search for weather by city or location',
        '5-day weather forecast',
        'Display current temperature, humidity, and wind speed',
        'Mobile-friendly interface',
      ],
    },
    {
      id: 2,
      title: 'Expense Tracker',
      description:
        'A web application to track daily expenses and manage personal finances.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: [
        'Add, edit, and delete expenses',
        'Categorize expenses by type',
        'Generate monthly expense reports',
        'Visualize spending through charts and graphs',
        'Responsive design for mobile and desktop',
      ],
    },
    {
      id: 3,
      title: 'Task Management System',
      description:
        'An app designed to help users organize and track their tasks and to-do lists.',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      features: [
        'Create, edit, and delete tasks',
        'Assign deadlines and priority levels',
        'Sort tasks by due date or priority',
        'Mark tasks as completed',
        'Collaborate with team members',
      ],
    },
    {
      id: 4,
      title: 'Online Learning Platform',
      description:
        'A platform offering a variety of online courses for users to enroll in and learn at their own pace.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL'],
      features: [
        'Browse and enroll in courses',
        'Interactive video lectures and quizzes',
        'Track progress with a dashboard',
        'Earn certificates upon course completion',
        'Mobile-friendly experience',
      ],
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description:
        'A mobile app that tracks fitness activities like running, cycling, and walking, providing stats and progress reports.',
      technologies: ['React Native', 'Expo', 'GraphQL'],
      features: [
        'Track workouts with GPS',
        'View detailed activity statistics',
        'Set fitness goals and monitor progress',
        'Sync data with health platforms (Google Fit, Apple Health)',
        'Receive personalized workout recommendations',
      ],
    },
  ];
}
