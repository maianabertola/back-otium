require("dotenv").config();
require("../db/index");
const ServiceDetail = require("../models/ServiceDetail.models");

const services = [
  {
    title: "Private Chef",
    slogan: "lorem",
    description: "lorem des",
    imageCover: "",
    imageServicePage: "",
  },
  {
    title: "Chauffeur",
    slogan: "lorem",
    description: "lorem des",
    imageCover: "",
    imageServicePage: "",
  },
  {
    title: "Gouvernante",
    slogan: "lorem",
    description: "lorem des",
    imageCover: "",
    imageServicePage: "",
  },
];

async function seed() {
  try {
    await ServiceDetail.deleteMany();
    await ServiceDetail.create(services);
    console.log("create all services", services);
    process.exit();
  } catch (e) {
    next(e);
    console.log("there is an error service seed");
  }
}

seed();
