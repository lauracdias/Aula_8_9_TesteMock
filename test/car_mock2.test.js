const { CarModel } = require('../src/infrastructure/database');
const car = require('../src/port/car_repository');

describe('create', () => {
    it('Valid Car', async () => {
        CarModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                marca: "Chevrolet",
                modelo: "Prisma",
                ano: "2007"
            }),
        }));

        expect(await car.create({
            id: 1,
            marca: "Chevrolet",
            modelo: "Prisma",
            ano: "2007"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                marca: expect.any(String),
                modelo: expect.any(String),
                ano: expect.any(String),
            }),
        );
    });
});