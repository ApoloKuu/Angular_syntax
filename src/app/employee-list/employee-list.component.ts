import { Component, OnInit } from '@angular/core';
import { EMPLOYEE } from '../data/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2> Employee List </h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `
})
export class EmployeeListComponent implements OnInit {

  public employees : EMPLOYEE[] = [];

  constructor(
    private _employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employees = data);
  }

}
