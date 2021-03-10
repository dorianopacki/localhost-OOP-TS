// S.O.L.I.D principles for my OOP exercises and futher projects

// S - single resposibility principle
// Class should only have one job, funcionality and one reason to change it

function logNotification(message: string): void {
  console.log(message);
}

class PiggyBank {
  constructor(public balance: number = 0) {}

  addACoin() {
    this.balance += 1;
    logNotification("You have successfuly added a coin to your piggybank");
  }
}

// O - open / closed
//Code should be open for futher development but closed for internal modification
type recepies = Array<Bread | Roll>;

class Bread {
  constructor(public description: string, public ingridient: string) {}
  specialIngridient() {
    console.log(this.ingridient);
  }
}

class Roll {
  constructor(public description: string, public ingridient: string) {}
  specialIngridient() {
    console.log(this.ingridient);
  }
}

function bakeMachine(recepies: recepies) {
  recepies.forEach((recepie) => {
    console.log(recepie.description);
    recepie.specialIngridient();
  });
}

const recepies = [
  new Bread("chleb marathon", "himalaian salt"),
  new Roll("bułka z makiem", "fresh poppy seed"),
];
// .... and so on

// class

// L - Liskov substitution
// classes that are based on their "parent" class should be able bo put on their parent place in code without any damege
class Dog {
  run(value: number) {
    console.log(`Runs ${value}km/h`);
  }
  barks() {
    console.log("Woof");
  }
}

class GermanShepherd extends Dog {
  guards() {
    //...
  }
  run(value: number) {
    console.log(`Moves ${value}km/h`);
  }

  barks() {
    console.log("Woof");
  }
}

// I - interface segregation
// class should not depend on methods that she doesn't use. Writing more, smaller Interfaces is better than one and huge.
interface IPlane {
  planeType: string;
  planeModel: string;
  getSpeed(): number;
  getAltitude(): number;
  startEngine(): void;
}

interface ILights {
  areLightsOn(): boolean;
  areLightsOff(): boolean;
}

interface IRadio {
  startRadio(): void;
  stopRadio(): void;
  sendMessage(): void;
}

class Radio implements IRadio {
  public startRadio() {}
  public stopRadio() {}
  public sendMessage() {}
}

// D - dependency inversion
// higher order modules code shouldnt depend on lower module code - but both of them should depend od abstraction

export class Switchable {
  turnOn() {}
  turnOff() {}
}

export class LightBulb extends Switchable {
  turnOn() {
    console.log("Turned on!");
  }

  turnOff() {
    console.log("Turned off!");
  }
}

export class PowerSwitch {
  public isOn: boolean = false;
  constructor(public client: Switchable) {}

  pressSwitch() {
    if (this.isOn) {
      this.client.turnOn();
      this.isOn = false;
    } else {
      this.client.turnOff();
      this.isOn = true;
    }
  }
}
