const { model, Schema } = require("mongoose");

const villaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  numberPeople: {
    type: Number,
    min: 1,
    max: 15,
    required: true,
  },
  squareMeter: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  views: {
    type: String,
    enum: ["mountain", "sea"],
    required: true,
  },
  pricePerWeek: {
    type: Number,
    required: true,
  },
  galeryPhoto: {
    type: [String],
    required: true,
  },
  slogan: {
    type: String,
    required: true,
  },
  descriptionText: {
    type: String,
    required: true,
  },
  idylicStatus: {
    type: [String],
    enum: ["Family Moment", "Friends Trip", "Life Party"],
    minItems: 1,
    maxItems: 3,
    required: true,
  },
  petFriendly: {
    type: Boolean,
    required: true,
  },
  distinctiveFeatures: [String],
  services: {
    type: [Schema.Types.ObjectId],
  },
  descriptionPieces: {
    type: [String],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Villa = model("Villa", villaSchema);

module.exports = Villa;
