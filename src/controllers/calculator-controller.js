const { convertNumberToRoman } = require('../helpers/converter');
const converter = require('../helpers/converter');

module.exports = {
    async substraction(request, response) {
        const { minuendo, subtraendo } = request.body;

        const minuendoNumber = converter.convertRomanToNumber(minuendo.toUpperCase());
        const subtraendoNumber = converter.convertRomanToNumber(subtraendo.toUpperCase());

        const resultNumber = minuendoNumber - subtraendoNumber;
        const resultado = converter.convertNumberToRoman(resultNumber)
        return response.json({ resultado });
    },
    async sum(request, response) {
        const { valor1, valor2 } = request.body;

        const valor1Number = converter.convertRomanToNumber(valor1.toUpperCase());
        const valor2Number = converter.convertRomanToNumber(valor2.toUpperCase());
        const resultNumber = valor1Number + valor2Number;
        const resultado = convertNumberToRoman(resultNumber);
        return response.json({ resultado });
    },
    async division(request, response) {
        const { dividendo, divisor } = request.body;

        const dividendoNumber = converter.convertRomanToNumber(dividendo.toUpperCase());
        const divisorNumber = converter.convertRomanToNumber(divisor.toUpperCase());

        const resultNumber = dividendoNumber / divisorNumber;
        const resultado = converter.convertNumberToRoman(resultNumber)
        return response.json({ resultado });
    },
}