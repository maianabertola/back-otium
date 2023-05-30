require("../db/index")
require("dotenv/config");

const User = require("../models/User.model")

const users = [
    {
    name: "bryan",
    birthDate: "24/01/1991",
    email: "bryan@mail.com",
    phoneNumber: "0635329536",
    address: "13 rue de la tourte",
    country: "france",
    postalCode: "94170",
    },
    {
    name: "romain",
    birthDate: "29/07/1995",
    email: "romain@mail.com",
    phoneNumber: "0610111213",
    address: "14 rue de la tourte",
    country: "france",
    postalCode: "75010",
    },
    {
    name: "antoine",
    birthDate: "29/01/1991",
    email: "antoine@mail.com",
    phoneNumber: "0727389406",
    address: "15 rue de la tourte",
    country: "france",
    postalCode: "75011",
    },
]

async function seed() {
    try {
        await User.deleteMany()
        await User.create(users)
        console.log("create all users", users)
        process.exit()
    } catch(e) {
        next(e)
        console.log("there is an error")
    }
}

seed()

