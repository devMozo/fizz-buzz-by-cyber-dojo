const FizzBuzz = require("../index.js");

describe("MyFizzBuzzShould", () => {

    test("Display numbers from 1 to 100", () => {
        const fizzBuzz = new FizzBuzz();
        fizzBuzz.setValues(100);

        const valuesAsString = fizzBuzz.getValuesAsString();

        expect(valuesAsString.split(" ")).toHaveLength(100);
    });

});