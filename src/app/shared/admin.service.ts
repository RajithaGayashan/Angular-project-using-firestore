import { Injectable } from '@angular/core';
import { Admin } from './admin.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  formData :Admin;
  constructor(private firestore:AngularFirestore) { }

  getAdmins():Observable<Admin[]>{
    return this.firestore.collection<Admin>('all-admin')
    .valueChanges();

  }
}
