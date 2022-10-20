import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
    <!-- interpolation -->
    <h2>Welcome {{name}}</h2>  
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome" + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>{{siteUrl}}</h2>

    <!-- property binding -->
    <input [id]="myId" type="text" value="Vishwas"/>
    <input [disabled]="isDisabled" id={{myId}} type="text" value="Vishwas"/>

    <!-- class binding -->
    <h2> Welcome {{name}}</h2>
    <h2 class="text-success">Codevolution</h2>
    <h2 [class]="successClass">Codevolution</h2>
    <h2 class="text-special" [class]="successClass">Codevolution</h2>

    <h2 [class.text-danger]="hasError">Codevolution</h2>

    <h2 [ngClass]="messageClasses">Codevolution</h2> 

    <!-- style binding -->
    <h2>Welcome {{name}}</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
    <h2 [style.color]="isHightLightColor">Style Binding 2</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>

    <!-- event binding -->
    <button (click)="onClick()">Greet</button>
    {{greeting}}
    <button (click)="onClickParams($event)">Greet</button>
    {{clickEvent}}
    <button (click)="inline='Welcome Vishwas'">Greet</button>
    {{inline}}

    <!-- template Reference Variables -->
    <h2>Welcome {{name}}</h2>
    <input #myInput type="text"/>
    <button (click)="logMessage(myInput.value)">Log</button>
  `,

  styles: [
    `
      .text-success{
        color: green
      }
      .text-danger{
        color: red
      }
      .text-special{
        font-style: italic;
      }
    `
  ]
})
export class BindingComponent implements OnInit {

  public name = 'Codevolution';
  public siteUrl = window.location.href;
  public myId = 'testId';
  public isDisabled = true;
  public successClass = "text-success"
  public hasError = true;
  public isSpecial = true;
  public isHightLightColor = 'orange';
  public greeting = '';
  public clickEvent = '';
  public inline = '';

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  }
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "hello" + this.name
  }

  onClick () {
    console.log("Welcome to Codevolution")
    this.greeting = 'Welcome to Codevolution'
  }

  onClickParams(event : any) {
    console.log(event);
    this.clickEvent = event.type
  }

  logMessage(value : any) {
    console.log(value)
  }
}
