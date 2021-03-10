import task1 from "./task1";
import { PowerSwitch, LightBulb } from "./solid.principles";

const bulb = new LightBulb();
const s1 = new PowerSwitch(bulb);

s1.pressSwitch();
