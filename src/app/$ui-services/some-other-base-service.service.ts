import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomeOtherBaseService {

  constructor() { }

  echoStrg (txt: string): string {
    return `from some-other-service: ${txt}`;
  }
}
