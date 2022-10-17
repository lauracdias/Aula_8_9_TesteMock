const { CarModel } = require('../infrastructure/database');

const CarRepository = {
    async create(data) {
        try {
            const model = new CarModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                ano: data.ano,
            };
            const options = { new: true };
            const filter = { modelo: data.modelo };
            const result = await CarModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await CarModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByModelo(data) {
        try {
            const result = await CarModel.findOne({ modelo: data.modelo }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await CarModel.deleteOne({ modelo: data.modelo }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = CarRepository;