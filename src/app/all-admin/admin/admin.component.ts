import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import {FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin',
    templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private service : AdminService,private firestore:AngularFirestore) {}

  error: string;
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form!=null)
    form.resetForm();
    this.service.formData={
      firstName : '' ,
      lastName : '' 
      // position : '' ,
      // adminCode : null ,
      // mobile: '' ,
      // gender: '' ,
      // email: '' ,
      // password : ''

   }
 }

 onRegister(form:NgForm){
   let data=form.value;
   console.log(form.value);
   this.firestore.collection('all-admin').add(data);
   this.resetForm(form);
 }
}