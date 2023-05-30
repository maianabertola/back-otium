const { model, Schema } = require("mongoose")

const villaSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    region: {
        type: String,
        require: true,
    },
    numberPeoples: {
        type: String,
        require: true,
    },
    squareMetter: {
        type: Number,
        require: true,
    },
    bedrooms: {
        type: Number,
        require: true,
    },
    bathrooms: {
        type: Number,
        require: true,
    },
    views: {
        type: String,
        enum: ["mountain", "sea"],
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    galeryPhoto: {
        type: [String],
        require: true,
    },
    slogan: {
        type: String,
        require: true,
    },
    descriptionText: {
        type: String,
        require: true,
    },
    idylicStatus: {
        type: String,
        enum: ["famillyMoment", "friendsTrip", "lifeParty"],
        require: true,
    },
    petFriendly: {
        type: Boolean,
        require: true,
    },
    distinctiveIncluded: {
        type: [Schema.Types.ObjectId],
        require: true,
    },
    descriptionPieces: {
        type: [String],
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    id: {
        type: [Schema.Types.ObjectId],
    },
})

const Villa = model("Villa", villaSchema)

module.exports = Villa