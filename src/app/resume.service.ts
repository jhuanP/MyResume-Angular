import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Job from './models/job.model';
import { Observable } from 'rxjs';

@Injectable()
export class ResumeService {

  api_url = 'http://localhost:3000';
  jobUrl = `${this.api_url}/api/job`;

  constructor(
    private http: HttpClient
  ) { }

  // .....some code 

//Create resume, takes a Job Object

createJob(job: Job): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.jobUrl}`, job);
  }

//...more code will go down here 

//......some code 

//Read job, takes no arguments
getJobs(): Observable<Job[]>{
    return this.http.get(this.jobUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Job[];
    }))
  }

  //Update job, takes a Job Object as parameter
    editJob(job:Job){
      let editUrl = `${this.jobUrl}`
      //returns the observable of http put request 
      return this.http.put(editUrl, job);
    }
  
  //...some other code 
deleteJob(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.jobUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }


}

