const { model, Schema } = require("mongoose");

const questionnaireSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
      ref: "User",
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    // required: true,
  },
  country: {
    type: String,
  },
  view: {
    type: String,
    enum: ["mountain", "sea"],
    // required: true,
  },
  idyllicStatus: {
    type: String,
    enum: ["Family Moment", "Friends Trip", "Life Party"],
  },
  numberOfPeople: {
    type: Number,
    // required: true,
    // min: 1,
  },
  petFriendly: {
    type: Boolean,
    // required: true,
  },
  numberOfBedroom: {
    type: Number,
    // required: true,
    // min: 1,
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

const Questionnaire = model("Questionnaire", questionnaireSchema);

module.exports = Questionnaire;
