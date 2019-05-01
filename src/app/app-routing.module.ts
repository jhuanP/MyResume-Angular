import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllJobsComponent} from './alljobs/alljobs.component';
import {HomeComponent} from './home/home.component';
import {NewjobComponent} from './newjob/newjob.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'newjob', component: NewjobComponent},
  { path: 'alljobs', component: AllJobsComponent },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
