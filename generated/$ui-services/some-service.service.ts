import { Injectable } from '@angular/core';
import { SomeOtherBaseService } from '@ui-services/some-other-base-service.service';

@Injectable({
  providedIn: 'root'
})
export class SomeService extends SomeOtherBaseService {

  constructor(private someOtherBaseService: SomeOtherBaseService) {
    super();
  }

  echoTxt (txt: string): string {
    return 'Hallo ' + this.echoStrg(txt);
  }
}
