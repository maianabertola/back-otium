const { model, Schema } = require("mongoose");

const serviceSchema = new Schema({
  title: {
    type: String,
  },
  slogan: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Service = model("Service", serviceSchema);

module.exports = Service;
