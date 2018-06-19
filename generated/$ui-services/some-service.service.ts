import { Injectable } from '@angular/core';
import { SomeOtherService } from '@ui-services/some-other-service.service';

@Injectable({
  providedIn: 'root'
})
export class SomeService {

  constructor(private someOtherService: SomeOtherService) { }

  echoTxt (txt: string): string {
    return `from some-service: ${this.someOtherService.echoStrg(txt)}`;
  }
}
