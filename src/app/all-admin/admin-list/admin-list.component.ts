import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
// import { Admin } from 'src/app/shared/admin.model';
//import { Console } from 'console';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  list:any;
  constructor(private service:AdminService) { }

  ngOnInit() {
    this.service.getAdmins().subscribe(actionArray =>{
        this.list=actionArray;
//  (item => {
  console.log(this.list)
  // return {
  //   id:item.payload.doc.id,
  //   ...item.payload.doc.data()
  // } as Admin;
// })
    });
  }
}
 