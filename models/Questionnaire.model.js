const { model, Schema } = require("mongoose")

const questionnaireSchema = new Schema({
    name: {
        type: String,
        required: true,
        required: true,
    },
    userId: {
        type: String,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    View: {
        type: String,
        enum: ["mountain", "sea"],
        required: true,
    },
    idylicStatus: {
        type: String,
        required: true,
    },
    numberPeoples: {
        type: Number,
        required: true,
    },
    petFriendly: {
        type: Boolean,
        required: true,
    },
    numberBedrooms: {
        type: Number,
        required: true,
    },
    services: {
        type: [Schema.Types.ObjectId],
    },
})

const Questionnaire = model("Questionnaire", questionnaireSchema)

module.exports = Questionnaire