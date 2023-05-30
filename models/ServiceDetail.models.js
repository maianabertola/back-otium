const { model, Schema } = require("mongoose");

const serviceDetailSchema = new Schema({
  title: {
    type: String,
    // required: true,
  },
  slogan: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  id: {
    type: String,
  },
});

const ServiceDetail = model("ServiceDetail", serviceDetailSchema);

module.exports = ServiceDetail;
