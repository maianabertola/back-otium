const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    birthDate: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    country: {
        type: String,
    },
    postalCode: {
        type: String,
    },
});

const User = model("User", userSchema)

module.exports = User