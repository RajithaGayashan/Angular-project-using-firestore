import { Component, OnInit } from '@angular/core';
import { Adminservice } from 'src/app/shared/admin.service';
import {FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin',
    templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private _service : Adminservice,private firestore:AngularFirestore) {}

  error: string;
  ngOnInit() {
  }

  resetForm(form ?:NgForm){
    if (form!=null)
    form.resetForm();
    this._service.formData={
      firstName : '' ,
      lastName : '' ,
      position : '' ,
      adminCode : null ,
      mobile: '' ,
      gender: '' ,
      email: '' ,
      password : ''

   }
 }

 onRegister(form:NgForm){
   let data=form.value;
   this.firestore.collection('admins').add(data);
   this.resetForm(form);
 }
}
