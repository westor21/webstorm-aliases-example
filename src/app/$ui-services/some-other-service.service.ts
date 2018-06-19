import { Injectable } from '@angular/core';
import {SomeOtherBaseService} from "@ui-services/some-other-base-service.service";

@Injectable({
  providedIn: 'root'
})
export class SomeOtherService extends SomeOtherBaseService {

  constructor() {
    super();
  }
}
