import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EMPLOYEE } from './data/employee';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/data/employees.json";

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<EMPLOYEE[]> {
    return this.http.get<EMPLOYEE[]>(this._url)
      // .catch(this.errorHandler);
  }

  errorHandler(error : HttpErrorResponse) {
    // return Observable.throw(error.message | "Network Error")
  }
}
