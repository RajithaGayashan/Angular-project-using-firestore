import { Injectable } from '@angular/core';
import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  formData :Admin;
  constructor() { }
}
