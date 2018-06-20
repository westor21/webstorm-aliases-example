import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SomeService} from '@ui-services/some-service.service';
import {SomeOtherBaseService} from '@ui-services/subdir/some-other-base-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SomeService,
    SomeOtherBaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
