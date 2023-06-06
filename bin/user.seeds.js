require("../db/index");
require("dotenv/config");

const User = require("../models/User.model");

const users = [
  {
    name: "Bryan",
    birthDate: "1990-06-16T18:51:04.000Z",
    email: "bryan@mail.com",
    phoneNumber: "0635329536",
    address: "13 rue de la tourte",
    country: "Italy",
    postalCode: "94170",
  },
  {
    name: "Romain",
    birthDate: "1993-12-16T18:51:04.000Z",
    email: "romain@mail.com",
    phoneNumber: "0610111213",
    address: "14 rue de la tourte",
    country: "France",
    postalCode: "75010",
  },
  {
    name: "Antoine",
    birthDate: "1993-09-16T18:51:04.000Z",
    email: "antoine@mail.com",
    phoneNumber: "0727389406",
    address: "15 rue de la tourte",
    country: "Portugal",
    postalCode: "75011",
  },
];

async function seed() {
  try {
    await User.deleteMany();
    await User.create(users);
    console.log("create all users", users);
    process.exit();
  } catch (error) {
    console.log("there is an error with user seed", error);
  }
}

seed();
