const { model, Schema } = require("mongoose")

const tripSchema = new Schema({
    startDate: {
        type: String,
        require: true,
    },
    endDate: {
        type: String,
        require: true,
    },
    idVilla: {
        type: String,
        require: true,
    },
    idUser: {
        type: String,
        require: true,
    },
})

const Trip = model("Trip", tripSchema)

module.exports = Trip