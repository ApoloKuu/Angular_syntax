import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>child works!</p>
    <h2>{{"Hello" + parentData}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
})
export class ChildComponent implements OnInit {

  @Input() public parentData: any;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit('Hey Codevolution');
  }

}
