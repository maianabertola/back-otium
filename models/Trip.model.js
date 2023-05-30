const { model, Schema } = require("mongoose")

const tripSchema = new Schema({
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    idVilla: {
        type: String,
        required: true,
    },
    idUser: {
        type: String,
        required: true,
    },
})

const Trip = model("Trip", tripSchema)

module.exports = Trip