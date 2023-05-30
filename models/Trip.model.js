const { model, Schema } = require("mongoose");

const tripSchema = new Schema({
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: true,
  },
  idVilla: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Villa",
  },
  idUser: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Trip = model("Trip", tripSchema);

module.exports = Trip;
