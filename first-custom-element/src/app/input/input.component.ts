import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <input type="text" name="name">
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class InputComponent implements OnInit {
  title = 'Input Elements';
  @Input() name: string;
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
