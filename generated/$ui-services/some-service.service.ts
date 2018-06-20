import { Injectable } from '@angular/core';
import { SomeOtherBaseService } from '@ui-services/subdir/some-other-base-service.service';

@Injectable({
  providedIn: 'root'
})
export class SomeService extends SomeOtherBaseService {

  constructor() {
    super();
  }

  echoTxt (txt: string): string {
    return 'Hallo ' + this.echoStrg(txt);
  }
}
