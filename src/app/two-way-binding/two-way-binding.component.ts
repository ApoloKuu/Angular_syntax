import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
  <!-- ngModel -->
    <input [(ngModel)]="name" type="text"/>
    {{name}}

  <!-- ngIF -->

  <!-- if else -->
  <h2 *ngIf="displayName; else elseBlock">
    Codevolution
  </h2>

  <!-- ternary operator -->
  <div *ngIf="displayName;then thenBlock;else elseBlock"></div>
  <ng-template #thenBlock>
    <h2>
      Codevolution
    </h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>Hidden</h2>
  </ng-template>

  <!-- ngSwitch -->
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked {{color}} color</div>
    <div *ngSwitchCase="'green'">You picked {{color}} color</div>
    <div *ngSwitchCase="'blue'">You picked {{color}} color</div>
    <div *ngSwitchDefault>Picked Again</div>
  </div>

  <!-- ngFor -->
  <div *ngFor="let data of Array; index as index">
    <h2>{{ index + 1 }} - {{data}}</h2>
  </div>

  <h1>First Array</h1>
  <div *ngFor="let data of Array; first as f">
    <h2>{{ f }} - {{data}}</h2>
  </div>

  <h1>Last Array</h1>
  <div *ngFor="let data of Array; last as l">
    <h2>{{ l }} - {{data}}</h2>
  </div>

  <h1>Odd Array</h1>
  <div *ngFor="let data of Array; odd as o">
    <h2>{{ o }} - {{data}}</h2>
  </div>

  <h1>Even Array</h1>
  <div *ngFor="let data of Array; even as e">
    <h2>{{ e }} - {{data}}</h2>
  </div>

  `
})
export class TwoWayBindingComponent implements OnInit {

  public name = '';
  public color = 'orange';
  public Array = ["red", "blue" , "yellow" , "green" ];
  displayName = false;

  constructor() { }

  ngOnInit(): void {
  }

}
