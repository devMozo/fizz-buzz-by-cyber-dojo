class FizzBuzz {
    constructor() {
        this.values = [];
    }

    setValues(quantity) {
        for(let i = 1; i <= quantity; i++) {
            this.values.push(i);
        }
    }

    getValuesAsString() {
        return this.values.join(" ");
    }
}

module.exports = FizzBuzz;