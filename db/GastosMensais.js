let mongoose = require('./conMongo')

let GastosMensaisSchema = new mongoose.Schema({
    despesas: {
        valor: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        vencimento: {
            type: Date
        },
        status: {
            type: String,
            enum: ['pago', 'não-pago', 'vencido']
        }
    },
    createAt: {
        type: Date,
        default: Date.now()
    }

})

let gastosMensais = mongoose.model('GastosFinanceiros', GastosMensaisSchema)

module.exports = gastosMensais