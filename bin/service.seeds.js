require("../db/index")
require("dotenv/config");

const ServiceDetail = require("../models/ServiceDetail.models")

const services = [
{
    title: "Private Chef",
    slogan: "lorem",
    description: "lorem des",
},
{
    title: "Chauffeur",
    slogan: "lorem",
    description: "lorem des",
},
{
    title: "Gouvernante",
    slogan: "lorem",
    description: "lorem des",
}
]

async function seed() {
    try {
        await ServiceDetail.deleteMany()
        await ServiceDetail.create(services)
        console.log("create all services", services)
        process.exit()
    } catch(e) {
        next(e)
        console.log("there is an error")
    }
}

seed()