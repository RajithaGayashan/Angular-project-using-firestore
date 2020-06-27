import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { Admin } from 'src/app/shared/admin.model';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  list:Admin[];
  constructor(private service:AdminService) { }

  ngOnInit() {
    this.service.getAdmins().subscribe(actionArray =>{
this.list=actionArray.map(item => {
  return {
    id:item.payload.doc.id,
    ...item.payload.doc.data} as Admin;
})
    })
  }

}
