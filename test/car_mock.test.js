const Cars = require('../src/application/car_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const CarsRepository = require('../src/port/car_repository');

jest.mock('../src/port/car_repository');

it('CREATE - Dado válido', async () => {
    const data = {
        marca: "Chevrolet",
        modelo: "Prisma",
        ano: "2007"
    }

    const id = Utils.generateUuid();

    CarsRepository.create.mockResolvedValue({ ...data, id });

    const result = await Cars.create(data);
    expect(result).toEqual({ ...data, id });
})

it('CREATE - Dado duplicado', async () => {
    const data = {
        marca: "Chevrolet",
        modelo: "Prisma",
        ano: "2007"
    }

    const id = Utils.generateUuid();

    CarsRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Cars.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})
