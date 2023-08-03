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
  numberOfPeople: {
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
  view: {
    type: String,
    enum: ["Mountain", "Sea"],
    required: true,
  },
  pricePerWeek: {
    type: Number,
    required: true,
  },
  bookedDates: [
    {
      Start: {
        type: Date,
        default: Date.now,
      },
      End: {
        type: Date,
      },
    },
  ],
  previewPhoto: {
    type: String,
    required: true,
  },

  heroPhoto: {
    type: String,
    required: true,
  },

  galeryPhoto: {
    type: [String],
    required: true,
  },
  tagline: {
    type: String,
    maxLength: 33,
    required: true,
  },
  slogan: {
    type: String,
    maxLength: 170,
    required: true,
  },
  description: {
    type: String,
    maxLength: 430,
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
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
  roomsDescriptions: {
    type: [
      {
        room: String,
        description: [String],
      },
    ],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Villa = model("Villa", villaSchema);

module.exports = Villa;
