import { Injectable } from '@angular/core';
import { Admin } from './admin.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  formData :Admin;
  constructor(private firestore:AngularFirestore) { }

  getAdmins(){
    return this.firestore.collection('all-admin').snapshotChanges();

  }
}
