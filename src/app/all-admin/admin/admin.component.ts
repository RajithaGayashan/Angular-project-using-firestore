import { Component, OnInit } from '@angular/core';
import { Adminservice } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private service : Adminservice) { }

  ngOnInit() {
  }

}
