const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    birthDate: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: true,
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