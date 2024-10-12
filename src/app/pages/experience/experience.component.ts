import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';
import { Experience } from '../../models/experience.interface';
import { IllustrationEmptyComponent } from '../../components/illustration-empty/illustration-empty.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActionBtnsComponent } from '../../components/action-btns/action-btns.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { ToContactPageComponent } from '../../components/to-contact-page/to-contact-page.component';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    IllustrationEmptyComponent,
    RouterLink,
    CommonModule,
    ActionBtnsComponent,
    TimelineComponent,
    ToContactPageComponent,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  isLoading: boolean = true;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.getAllExperiences();
  }

  getAllExperiences(): void {
    this.experienceService.getAllExperiences().subscribe((data) => {
      this.experiences = data.map((item) => {
        return {
          ...item,
          startDate: (item.startDate as unknown as Timestamp).toDate(),
          endDate: (item.endDate as unknown as Timestamp).toDate(),
        };
      });

      this.experiences.sort(
        (a, b) => a.startDate.getTime() - b.startDate.getTime()
      );
      this.isLoading = false;
    });
  }

  deleteExperience(id: string): void {
    this.experienceService.deleteExperience(id);
  }
}
