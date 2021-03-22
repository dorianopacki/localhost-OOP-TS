type caseTuple = [boolean, () => void];

export interface ISwitch {
  add(condition: Boolean, callback: () => void): void;
  isValid(): void;
  isEmpty(): boolean;
}

export class Switch implements ISwitch {
  public cases: Array<caseTuple> = [];

  add(condition: boolean, callback: () => void): void {
    const newCase: caseTuple = [condition, callback];
    this.cases.push(newCase);
  }

  isValid() {
    for (let i = 0; i < this.cases.length; i++) {
      if (this.cases[i][0] === false) {
        const errorCallback = this.cases[i][1];
        errorCallback();
        break;
      }
    }
  }

  isEmpty() {
    if (this.cases.length < 1) return true;

    return false;
  }
}
