const mongoose = require('mongoose');

const PlanetSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    clima: {
        type: String,
        required: true,
    },
    terreno: {
        type: String,
        required: true,
    },
    aparicoes: {
        type: Number,
        required: true
    }
});

const Planet = mongoose.model('Planet', PlanetSchema)
module.exports = Planet;
