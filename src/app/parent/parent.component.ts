import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <p>parent works!</p>
  {{message}}
  <app-child (childEvent)="message=$event" [parentData]="name"></app-child>
  `,
})
export class ParentComponent implements OnInit {

  public name = 'Vishwas';
  public message = '';

  constructor() { }

  ngOnInit(): void {
  }

}
