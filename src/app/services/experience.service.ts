import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience.interface';
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
export class ExperienceService {
  experienceCollection: any;
  constructor(private firestore: Firestore) {
    this.experienceCollection = collection(this.firestore, 'experience');
  }

  getAllExperiences(): Observable<Experience[]> {
    return collectionData(this.experienceCollection, {
      idField: 'id',
    }) as Observable<Experience[]>;
  }

  addExperience(experience: Experience): Promise<DocumentReference> {
    return addDoc(this.experienceCollection, experience);
  }

  getExperienceById(id: string): Observable<Experience> {
    const experienceDoc = doc(this.firestore, `experience/${id}`);
    return docData(experienceDoc, { idField: 'id' }) as Observable<Experience>;
  }

  updateExperience(
    id: string,
    updatedexperience: Partial<Experience>
  ): Promise<void> {
    const experienceDoc = doc(this.firestore, `experience/${id}`);
    return updateDoc(experienceDoc, updatedexperience);
  }

  deleteExperience(id: string): Promise<void> {
    const experienceDoc = doc(this.firestore, `experience/${id}`);
    return deleteDoc(experienceDoc);
  }
}
