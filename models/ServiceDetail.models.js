const { model, Schema } = require("mongoose");

const serviceSchema = new Schema({
  title: {
    type: String,
  },
  slogan: {
    type: String,
    maxLength: 70,
  },
  description: {
    type: String,
    maxLength: 450,
  },

  imageCover: {
    type: String,
  },

  imageServicePage: {
    type: String,
  },
});

const Service = model("Service", serviceSchema);

module.exports = Service;
