import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SomeService} from "@ui-services/some-service.service";
import {SomeOtherService} from "@ui-services/some-other-service.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SomeService,
    SomeOtherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
