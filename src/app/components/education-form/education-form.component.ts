import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EducationService } from '../../services/education.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Timestamp } from 'firebase/firestore';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'education-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './education-form.component.html',
  styleUrl: './education-form.component.scss',
})
export class EducationFormComponent implements OnInit {
  educationForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private educationService: EducationService,
    private route: ActivatedRoute,
    private router: Router,
    private firestore: Firestore
  ) {}

  educationId: string | null = null;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.educationId = this.route.snapshot.paramMap.get('id');
      this.isEditMode = !!this.educationId;
      this.initForm();
      if (this.isEditMode) this.loadEducationData(this.educationId!);
    });
  }

  loadEducationData(id: string): void {
    const educationDocRef = doc(this.firestore, `education/${id}`);

    getDoc(educationDocRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const educationData = docSnapshot.data();
          const startDate = (educationData['startDate'] as Timestamp).toDate();
          const endDate = (educationData['endDate'] as Timestamp).toDate();

          const formattedStartDate = startDate.toISOString().split('T')[0];
          const formattedEndDate = endDate.toISOString().split('T')[0];

          this.educationForm.patchValue({
            name: educationData['name'],
            qualification: educationData['qualification'],
            startDate: formattedStartDate,
            endDate: formattedEndDate,
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching education data:', error);
      });
  }

  initForm(): void {
    this.educationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      qualification: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.educationForm.valid) {
      const formValue = this.educationForm.value;

      const educationData = {
        ...formValue,
        startDate: Timestamp.fromDate(new Date(formValue.startDate)),
        endDate: Timestamp.fromDate(new Date(formValue.endDate)),
      };

      if (this.isEditMode && this.educationId) {
        this.educationService
          .updateEducation(this.educationId, educationData)
          .then(() => {
            this.router.navigate(['/education']);
          })
          .catch((error) => {
            console.error('Error updating education:', error);
          });
      } else {
        this.educationService
          .addEducation(educationData)
          .then(() => {
            this.router.navigate(['/education']);
          })
          .catch((error) => {
            console.error('Error adding education:', error);
          });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/education']);
  }
}
