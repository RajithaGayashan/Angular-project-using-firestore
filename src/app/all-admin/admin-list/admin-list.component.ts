import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { Admin } from 'src/app/shared/admin.model';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Toast, ToastrService } from 'ngx-toastr';
// import { Console } from 'console';
// import { Admin } from 'src/app/shared/admin.model';
//import { Console } from 'console';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  list:any;
  constructor(private service:AdminService,
    private firestore :AngularFirestore,
    private toastr:ToastrService
    )
     { }

  ngOnInit() {
    this.service.getAdmins().subscribe(actionArray =>{
        this.list=actionArray;

  console.log(this.list)
    });
  }

  onEdit(emp:Admin){
    this.service.formData =Object.assign({},emp);
  }
 
  onDelete(id:string){
    console.log(id);
    if(confirm("Are you sure to delete this record ?")) {  
      this.firestore.doc('all-admin/'+id).delete();
      this.toastr.warning('Deleted successfully','Admin.Register');
 
    

    } 
  }
}

 