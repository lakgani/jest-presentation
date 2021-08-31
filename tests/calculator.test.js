const {add, InvalidParametersError, subtract} = require("../src/calculator");

describe('calculator', () => {
    describe('add', () => {
        test('should add provided numbers', () => {
            expect(add(1,2)).toBe(3);
        })

        test('should throw error if any parameter is not a number', () => {
            expect(() => {
                add(1, "1")
            }).toThrowError(InvalidParametersError);
        })
    })

    describe('subtract', () => {
        test('should subtract provided numbers', () => {
            expect(subtract(1,2)).toBe(-1);
        })

        test('should throw error if any parameter is not a number', () => {
            expect(() => {
                subtract(1, "1")
            }).toThrowError(InvalidParametersError);
        })
    })
    
})
