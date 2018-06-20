export class SomeOtherBaseService {

  constructor() { }

  echoStrg (txt: string): string {
    return `from some-other-base-service: ${txt}`;
  }
}
