const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:pass@cluster0.7fg2ljh.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    marca: String,
    modelo: String,
    ano: String,
});

const CarModel = mongoose.model('CarModel', CarSchema);

module.exports = {
    CarModel,
};