import { Component } from '@angular/core';
import { SomeService } from '@ui-services/some-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  output;
  constructor(private someService: SomeService) {
    this.output = someService.echoTxt('Harry');
  }
}
