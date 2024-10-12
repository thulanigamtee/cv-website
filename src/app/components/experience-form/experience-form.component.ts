import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ExperienceService } from '../../services/experience.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Timestamp } from 'firebase/firestore';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-experience-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './experience-form.component.html',
  styleUrl: './experience-form.component.scss',
})
export class ExperienceFormComponent implements OnInit {
  experienceForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private experienceService: ExperienceService,
    private route: ActivatedRoute,
    private router: Router,
    private firestore: Firestore
  ) {}

  experienceId: string | null = null;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.experienceId = this.route.snapshot.paramMap.get('id');
      this.isEditMode = !!this.experienceId;
      this.initForm();
      if (this.isEditMode) this.loadExperienceData(this.experienceId!);
    });
  }

  loadExperienceData(id: string): void {
    const experienceDocRef = doc(this.firestore, `experience/${id}`);

    getDoc(experienceDocRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const experienceData = docSnapshot.data();
          const startDate = (experienceData['startDate'] as Timestamp).toDate();
          const endDate = (experienceData['endDate'] as Timestamp).toDate();

          const formattedStartDate = startDate.toISOString().split('T')[0];
          const formattedEndDate = endDate.toISOString().split('T')[0];

          this.experienceForm.patchValue({
            companyName: experienceData['companyName'],
            role: experienceData['role'],
            description: experienceData['description'],
            startDate: formattedStartDate,
            endDate: formattedEndDate,
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching experience data:', error);
      });
  }

  initForm(): void {
    this.experienceForm = this.formBuilder.group({
      companyName: ['', [Validators.required]],
      role: ['', [Validators.required]],
      description: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.experienceForm.valid) {
      const formValue = this.experienceForm.value;

      const experienceData = {
        ...formValue,
        startDate: Timestamp.fromDate(new Date(formValue.startDate)),
        endDate: Timestamp.fromDate(new Date(formValue.endDate)),
      };

      if (this.isEditMode && this.experienceId) {
        this.experienceService
          .updateExperience(this.experienceId, experienceData)
          .then(() => {
            this.router.navigate(['/experience']);
          })
          .catch((error) => {
            console.error('Error updating experience:', error);
          });
      } else {
        this.experienceService
          .addExperience(experienceData)
          .then(() => {
            this.router.navigate(['/experience']);
          })
          .catch((error) => {
            console.error('Error adding experience:', error);
          });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/experience']);
  }
}
