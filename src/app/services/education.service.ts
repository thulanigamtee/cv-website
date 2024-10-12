import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education.interface';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentReference,
  updateDoc,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  educationCollection: any;
  constructor(private firestore: Firestore) {
    this.educationCollection = collection(this.firestore, 'education');
  }

  getAllEducation(): Observable<Education[]> {
    return collectionData(this.educationCollection, {
      idField: 'id',
    }) as Observable<Education[]>;
  }

  addEducation(education: Education): Promise<DocumentReference> {
    return addDoc(this.educationCollection, education);
  }

  getEducationById(id: string): Observable<Education> {
    const educationDoc = doc(this.firestore, `education/${id}`);
    return docData(educationDoc, { idField: 'id' }) as Observable<Education>;
  }

  updateEducation(
    id: string,
    updatedEducation: Partial<Education>
  ): Promise<void> {
    const educationDoc = doc(this.firestore, `education/${id}`);
    return updateDoc(educationDoc, updatedEducation);
  }

  deleteEducation(id: string): Promise<void> {
    const educationDoc = doc(this.firestore, `education/${id}`);
    return deleteDoc(educationDoc);
  }
}
