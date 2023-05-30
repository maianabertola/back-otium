const { model, Schema } = require("mongoose")

const favoriSchema = new Schema({
    idUser: {
        type: [Schema.Types.ObjectId],
    },
    idVilla: {
        type: [Schema.Types.ObjectId],
    },
})

const Favori = model("Favori", favoriSchema)

module.exports = Favori