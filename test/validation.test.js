const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        marca: "Fiat",
        modelo: "Mobi",
        ano: "2020"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro marca', () => {
    const result = Validation.create({
        modelo: "Mobi",
        ano: "2020"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
