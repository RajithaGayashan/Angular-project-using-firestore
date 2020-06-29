import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import {FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
    templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private service : AdminService,
  private firestore:AngularFirestore,
  private toastr : ToastrService
  ) { }

  error: string;
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form!=null)
    form.resetForm();
    this.service.formData={
      id : null ,
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
   console.log(form.value)
   const adminId =this.service.getId()
   let data = {
     id : adminId,
     firstName : form.value.firstName,
     lastName : form.value.lastName
   }
   console.log(data);
  //  let data=Object.assign({},form.value);
//    delete data.id;
   if(form.value.id==null)
  //  console.log(form.value);
    this.firestore.collection('all-admin').doc(adminId).set(data);
   else 
  this.firestore.doc('admin/'+form.value.id).update(data);
    this.resetForm(form);
   this.toastr.success('Registered successfully','Admin.Register');
 }

}