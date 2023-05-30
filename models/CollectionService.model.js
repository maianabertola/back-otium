const { model, Schema } = require("mongoose")

const collectionserviceSchema = new Schema({
    collectionService: {
        type: [Schema.Types.ObjectId],
    },
})

const CollectionService = model("CollectionService", collectionserviceSchema)

module.exports = CollectionService