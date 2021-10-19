const FizzBuzz = require("../index.js");

describe("MyFizzBuzzShould", () => {

    test("Display numbers from 1 to 100", () => {
        const fizzBuzz = new FizzBuzz();
        fizzBuzz.setValues(100);

        const valuesAsString = fizzBuzz.getValuesAsString();

        expect(valuesAsString.split(" ")).toHaveLength(100);
    });

    test("Insert a 'Fizz' word instead of the value each 3 elements", () => {
        const fizzBuzz = new FizzBuzz();
        fizzBuzz.setValues(100);

        const values = fizzBuzz.getValues();
        const fizzWords = values.filter(value => value === "Fizz");

        expect(fizzWords).toHaveLength(27);
    });

    test("Insert a 'Buzz' word instead of the value each 5 elements", () => {
        const fizzBuzz = new FizzBuzz();
        fizzBuzz.setValues(100);

        const values = fizzBuzz.getValues();
        const fizzWords = values.filter(value => value === "Buzz");

        expect(fizzWords).toHaveLength(14);
    });

    test("Insert a 'FizzBuzz' each multiple value of 3 and 5 instead of the number value", () => {
        const fizzBuzz = new FizzBuzz();
        fizzBuzz.setValues(100);

        const values = fizzBuzz.getValues();
        const fizzWords = values.filter(value => value === "FizzBuzz");

        expect(fizzWords).toHaveLength(6);
    });

});