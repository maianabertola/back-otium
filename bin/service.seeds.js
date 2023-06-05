require("../db/index");
require("dotenv/config");

const ServiceDetail = require("../models/ServiceDetail.models");

const services = [
  {
    title: "Private Chef",
    slogan: "lorem",
    description: "lorem des",
    imageCover: "",
    imageServicePage: "",
    id: "647cc042fe3aca1e35638690",
  },
  {
    title: "Chauffeur",
    slogan: "lorem",
    description: "lorem des",
    imageCover: "",
    imageServicePage: "",
    id: "647cc042fe3aca1e35638691",
  },
  {
    title: "Gouvernante",
    slogan: "lorem",
    description: "lorem des",
    imageCover: "",
    imageServicePage: "",
    id: "647cc042fe3aca1e35638692",
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
