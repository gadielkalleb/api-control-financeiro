let mongoose = require('../db/conMongo')
let bcrypt = require('bcrypt')

let UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true, select: false }
})

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

let User = mongoose.model('User', UserSchema)

moodule.exports = User