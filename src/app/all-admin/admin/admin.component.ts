import { Component, OnInit } from '@angular/core';
import { Adminservice } from 'src/app/shared/admin.service';
import {FormControl, FormGroup, Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin',
    templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private _service : Adminservice) { }

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
}
