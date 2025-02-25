const { model, Schema } = require("mongoose");

const bookingSchema = new Schema({
  numberOfPeople: {
    type: Number,
    required: true,
    min: 1,
  },
  pet: {
    type: Boolean,
    required: true,
  },
  message: {
    type: String,
    maxLength: 2000,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  villaId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Villa",
  },
  bookedDates: {
    Start: {
      type: Date,
      default: Date.now,
      required: true,
    },
    End: {
      type: Date,
      required: true,
    },
  },
});

const Booking = model("Booking", bookingSchema);

module.exports = Booking;
