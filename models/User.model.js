const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
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
    // address: {
    //     street: String,
    //     zipCode: String,
    //     streetNumber: String,
    //     country: String
    // },
    password: {
        type: String,
        required: true,
    }
});

const User = model("User", userSchema)

module.exports = User