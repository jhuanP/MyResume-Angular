import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllJobsComponent } from './alljobs/alljobs.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumeService } from './resume.service';
import { HomeComponent } from './home/home.component';
import { NewjobComponent } from './newjob/newjob.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    //ModelComponent,
    AllJobsComponent,
    HomeComponent,
    NewjobComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
