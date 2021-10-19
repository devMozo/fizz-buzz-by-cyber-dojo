class FizzBuzz {
    constructor() {
        this.values = [];
    }

    setValues(quantity) {
        for(let i = 1; i <= quantity; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
                this.values.push("FizzBuzz");
            } else if(i % 3 === 0) {
                this.values.push("Fizz");
            } else if(i % 5 === 0) {
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