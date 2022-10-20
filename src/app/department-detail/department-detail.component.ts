import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <h3>you select department with id = {{departmentId}}</h3>

  <div>
    <button (click)="showOverview()">overview</button>
    <button (click)="showContact()">contact</button>
  </div>
  <router-outlet></router-outlet>
  <br>
  <div>
  <button (click)="goPrevious()">
    previous
  </button>
  <button (click)="goNext()">
    next
  </button>
  </div>
  <br>
  <div>
    <button (click)="gotoDepartment()">Back</button>
  </div>
  `
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get("id"));
    // this.departmentId = id;
    this.route.paramMap.subscribe((paramas: ParamMap) => {
      // let id = parseInt(paramas.get("id"));
      // this.departmentId = id
    })
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department', nextId])
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/department', previousId])
  }

  gotoDepartment() {
    let selectId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/department' , {id : selectId , test : 'tastvalue'}]);
    this.router.navigate(['../', { id: selectId }], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route })
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route })
  }

}
