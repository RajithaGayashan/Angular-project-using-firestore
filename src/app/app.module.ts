import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AllAdminComponent } from './all-admin/all-admin.component';
import { AdminComponent } from './all-admin/admin/admin.component';
import { AdminListComponent } from './all-admin/admin-list/admin-list.component';
import { AdminService } from './shared/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    AllAdminComponent,
    AdminComponent,
    AdminListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
