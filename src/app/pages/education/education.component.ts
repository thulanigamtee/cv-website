import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../services/education.service';
import { CommonModule } from '@angular/common';
import { ToContactPageComponent } from '../../components/to-contact-page/to-contact-page.component';
import { Education } from '../../models/education.interface';
import { RouterLink } from '@angular/router';
import { IllustrationEmptyComponent } from '../../components/illustration-empty/illustration-empty.component';
import { ActionBtnsComponent } from '../../components/action-btns/action-btns.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    ToContactPageComponent,
    RouterLink,
    IllustrationEmptyComponent,
    ActionBtnsComponent,
    TimelineComponent,
    LoaderComponent,
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [];
  isLoading: boolean = true;

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.getAllEducation();
  }

  getAllEducation(): void {
    this.educationService.getAllEducation().subscribe((data) => {
      this.educationList = data.map((item) => {
        return {
          ...item,
          startDate: (item.startDate as unknown as Timestamp).toDate(),
          endDate: (item.endDate as unknown as Timestamp).toDate(),
        };
      });

      this.educationList.sort(
        (a, b) => a.startDate.getTime() - b.startDate.getTime()
      );
      this.isLoading = false;
    });
  }

  deleteEducation(id: string): void {
    this.educationService.deleteEducation(id);
  }
}
