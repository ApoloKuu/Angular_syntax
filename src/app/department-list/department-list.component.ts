import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>department list</h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected] = "isSelect(department)"  *ngFor="let department of departments">
        <span class="badge"> {{department.id}} </span> {{department.name}}
      </li>
    </ul>
  `
})
export class DepartmentListComponent implements OnInit {

  public selectedId : any;
  departments = [
    {"id" : 1, "name" : "Angular"},
    {"id" : 2, "name" : "Node"},
    {"id" : 3, "name" : "MangoDB"},
    {"id" : 4, "name" : "Ruby"},
    {"id" : 5, "name" : "Bootstrap"},
  ]
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramas : ParamMap) => {
      // let id = parseInt(paramas.get("id"));
      // this.selectedId = id;
    })
  }

  onSelect(department : any) {
    // this.router.navigate(['/department' , department.id])
    this.router.navigate([department.id] , {relativeTo: this.route})
  }

  isSelect(department : any) {
    return department.id === this.selectedId;
  }
}
