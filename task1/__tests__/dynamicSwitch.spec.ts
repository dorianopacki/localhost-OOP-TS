import {Switch} from '../oop-ts/dynamicSwitch/DynamicSwitch'

describe("dynamicSwitch", () => {
    it(".isEmpty method returns true when statemens are empty", () => {
        const switchInstance = new Switch()
        const result = switchInstance.isEmpty()
        expect(result).toBe(true)
    })

    it(".add method adds new statements", () => {
        const value = "test"
        const value2 = 10

        const switchInstance = new Switch()
        switchInstance.add(value.length < 5, () => console.error("value is too short"))
        switchInstance.add(typeof value !== "string", () => console.error("value has to be of type string"))
        switchInstance.add(typeof value2 !== "number" ||  Number.isFinite(value2), () => console.error("value has to be a finite number"))
    })

    it(".isValid method check if provided statements are valid", () => {
        const switchInstance = new Switch()
        switchInstance.add(true, () => console.error("false"))
        const result = switchInstance.isValid()
        
    })
})