let mongoose = require('../db/conMongo')

let RendaMensalSchema = new mongoose.Schema({
    salario: {
        type: String,
        required: true
    },
    mes: {
        type: String,
        enum: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
        requried: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
})

let rendaMensal = mongoose.model('RendaMensal', RendaMensalSchema)

module.exports = rendaMensal