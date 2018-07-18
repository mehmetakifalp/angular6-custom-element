import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <p>
      input works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
