const { model, Schema } = require("mongoose");

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
  numberPeople: {
    type: Number,
    min: 1,
    max: 15,
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
  pricePerWeek: {
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
    enum: ["Family Moment", "Friends Trip", "Life Party"],
    require: true,
  },
  petFriendly: {
    type: Boolean,
    require: true,
  },
  distinctiveFeatures: [String],
  services: {
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
});

const Villa = model("Villa", villaSchema);

module.exports = Villa;
