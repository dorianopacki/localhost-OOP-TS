type callback = () => void;
type statementTuple = [boolean, callback];

export interface ISwitch {
  statements: Array<statementTuple>;

  add(condition: boolean, callback: () => void): void;
  isValid(): boolean;
}

export class Switch {
  public statements: Array<statementTuple> = [];

  add(condition: boolean, callback: callback) {
    this.statements.push([condition, callback]);
  }

  isValid() {
    for (let i = 0; i < this.statements.length; i++) {
      if (this.statements[i][0]) continue;
      if (!this.statements[i][0]) {
        const callback = this.statements[i][1];
        callback();
        break;
      }
    }
    this.statements = [];
  }

  isEmpty() {
    if (this.statements.length > 0) return false;

    return true;
  }
}
