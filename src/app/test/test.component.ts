import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  // inline Writting

  // template: `<div>
  //   Inline template
  // </div>`,
  // styles: [`
  //   div{
  //     color : Red
  //   }
  // `]

})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
