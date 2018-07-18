import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [InputComponent]
})
export class AppModule {

  constructor(private injector: Injector){
    const input = createCustomElement(InputComponent, {injector});
    customElements.define('app-input', input);
  }

  ngDoBootstrap(){}
  

 }
