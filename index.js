class FizzBuzz {
    constructor() {
        this.values = [];
    }

    setValues(quantity) {
        for(let i = 1; i <= quantity; i++) {
            const isMultipleOfFive = i % 5 === 0;
            const isMultipleOfThree = i % 3 === 0;

            if(isMultipleOfThree && isMultipleOfFive) {
                this.values.push("FizzBuzz");
            } else if(isMultipleOfThree) {
                this.values.push("Fizz");
            } else if(isMultipleOfFive) {
                this.values.push("Buzz");
            } else {
                this.values.push(i);
            }           
        }
    }

    getValues() {
        return this.values;
    }

    getValuesAsString() {
        return this.values.join(" ");
    }
}

module.exports = FizzBuzz;