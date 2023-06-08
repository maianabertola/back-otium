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
  
  pickedCountry: {
    type: [String],
  },
  pickedView: {
    type: String,
    enum: ["mountain", "sea"],
    // required: true,
  },
  pickedIdyllicStatus: {
    type: [String],
  },
  numberOfPeople: {
    type: Number,
    // required: true,
    min: 1,
  },
  petFriendly: {
    type: [String],
    // required: true,
  },
  numberOfBedroom: {
    type: Number,
    // required: true,
    min: 1,
  },
  pickedServices: [
    {
      type: [String],
      ref: "Service",
    },
  ],
});

const Questionnaire = model("Questionnaire", questionnaireSchema);

module.exports = Questionnaire;
