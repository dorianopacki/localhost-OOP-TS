import {isValueValid} from '../Utils/Validation'

describe("isValueValid util function", () => {
    describe('validation of users name and surname', () => {
        it("returns false when names lenght has less than 2 chars", () => {
            const notValidUserName = "A"
            const notValidUserName2 = " "
            const notValidUserName3 = ""

            const result = isValueValid("name", notValidUserName)
            expect(result).toBe(false)
            
            const result2 = isValueValid("name", notValidUserName2)
            expect(result2).toBe(false)
            
            const result3 = isValueValid("name", notValidUserName3)
            expect(result3).toBe(false)
        })
        it("returns true when name lenght is equal or greater than 2", () => {
            const validUserName = "Adam"
            const validUserName2 = "Ad"
            const validUserName3 = "Ada"

            const result = isValueValid("name", validUserName)
            expect(result).toBe(true)

            const result2 = isValueValid("name", validUserName2)
            expect(result2).toBe(true)

            const result3 = isValueValid("name", validUserName3)
            expect(result3).toBe(true)
        })

        it("returns false when surname lenght is less than 2", () => {
            const notValidUserSurame = "A"
            const notValidUserSurame2 = " "
            const notValidUserSurame3 = ""

            const result = isValueValid("surname", notValidUserSurame)
            expect(result).toBe(false)
            
            const result2 = isValueValid("surname", notValidUserSurame2)
            expect(result2).toBe(false)
            
            const result3 = isValueValid("surname", notValidUserSurame3)
            expect(result3).toBe(false)
        })

        it("returns true when surname lenght is equal or greater than 2", () => {
            const validUserSurame = "Adam"
            const validUserSurame2 = "Ad"
            const validUserSurame3 = "Ada"

            const result = isValueValid("surname", validUserSurame)
            expect(result).toBe(true)

            const result2 = isValueValid("surname", validUserSurame2)
            expect(result2).toBe(true)

            const result3 = isValueValid("surname", validUserSurame3)
            expect(result3).toBe(true)
        })

        it("returns false when provided email is not matching email reggexp", () => {
            const notValidUserEmail = "example.example.com"
            const notValidUserEmail2 = "asdf"
            const notValidUserEmail3 = " "

            const result = isValueValid("email", notValidUserEmail)
            expect(result).toBe(false)

            const result2 = isValueValid("email", notValidUserEmail2)
            expect(result2).toBe(false)

            const result3 = isValueValid("email", notValidUserEmail3)
            expect(result3).toBe(false)

        })

        it("returns true when provided email is matching email reggexp", () => {
            const validUserEmail = "example@example.com"
            const validUserEmail2 = "asdfg@asdfg.pl"
            const validUserEmail3 = "a@a.de"

            const result = isValueValid("email", validUserEmail)
            expect(result).toBe(true)

            const result2 = isValueValid("email", validUserEmail2)
            expect(result2).toBe(true)

            const result3 = isValueValid("email", validUserEmail3)
            expect(result3).toBe(true)

        })
    });
})