const { model, Schema } = require("mongoose")

const questionnaireSchema = new Schema({
    name: {
        type: String,
        require: true,
        require: true,
    },
    userId: {
        type: String,
    },
    startDate: {
        type: String,
        require: true,
    },
    endDate: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    View: {
        type: String,
        enum: ["mountain", "sea"],
        require: true,
    },
    idylicStatus: {
        type: String,
        require: true,
    },
    numberPeoples: {
        type: Number,
        require: true,
    },
    petFriendly: {
        type: Boolean,
        require: true,
    },
    numberBedrooms: {
        type: Number,
        require: true,
    },
    services: {
        type: [Schema.Types.ObjectId],
    },
})

const Questionnaire = model("Questionnaire", questionnaireSchema)

module.exports = Questionnaire