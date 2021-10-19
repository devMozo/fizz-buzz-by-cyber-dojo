class FizzBuzz {
    constructor() {
        this.values = [];
    }

    setValues(quantity) {
        for(let i = 1; i <= quantity; i++) {
            const isMultipleOfThree = i % 3 === 0;
            const isMultipleOfFive = i % 5 === 0;
            const fizzWord = isMultipleOfThree ? "Fizz" : "";
            const buzzWord = isMultipleOfFive ? "Buzz" : "";
            const finalWord = fizzWord + buzzWord;

            if(finalWord) {
                this.values.push(finalWord);
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