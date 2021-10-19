import FizzBuzz from "../index.js";

describe("MyFizzBuzzShould", () => {

    beforeEach(() => {
        const fizzBuzz = new FizzBuzz();
    });

    test("Display numbers from 1 to 100", () => {
        const values = fizzBuzz.getValues();

        expect(values.split()).toHaveLength(100);
    });

});