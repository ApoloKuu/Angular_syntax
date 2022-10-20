import { Component, OnInit } from '@angular/core';
import { EMPLOYEE } from '../data/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Details</h2>
    {{errormessage}}
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}} . {{employee.name}}-{{employee.age}}</li>
    </ul>
  `
})
export class EmployeeDetailComponent implements OnInit {

  public employees : EMPLOYEE[] = [];
  public errormessage : any;
  constructor(
    private _employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employees = data , error => this.errormessage = error);
    console.log(this.employees);
  }

}
