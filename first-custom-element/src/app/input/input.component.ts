import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
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
