


module.exports = {
    convertNumberToRoman(numberValue) {
        const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

        let result = '';
        for (index in romanValues) {
            while (numberValue >= romanValues[index]){
                numberValue -= romanValues[index];
                console.log('numberValue', numberValue);
                result += romanNumbers[index];
            }
        }
        return result
    },
    convertRomanToNumber(romanNumber) {
        const romanNumeral = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }

        let result = 0;

        for (index in romanNumber) {
            console.log('index', index);
            const element = romanNumber[index];
            const previousElement = romanNumber[index - 1];
            console.log('element', element);
            console.log('previousElement', previousElement);
            //
            if (index == 0 || romanNumeral[element] <= romanNumeral[previousElement]) {
                console.log('index', index);
                result += romanNumeral[element];
                console.log('result', romanNumeral[element]);
            } else {
                result += romanNumeral[element] - 2 * romanNumeral[previousElement];
            }
        }

        return result
    }
}