require("../db/index");
require("dotenv/config");

const Villa = require("../models/Villa.model");

const villas = [
  {
    name: "Fabine",
    country: "Italy",
    region: "Toscana",
    numberOfPeople: 7,
    squareMeter: 230,
    bedrooms: 5,
    bathrooms: 6,
    view: "mountain",
    pricePerWeek: 1200,
    startDate: "12 / 10 / 2023",
    endDate: "14 / 11 / 2023",
    galeryPhoto: [
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=600&h=372",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-342ef5a288146d3d09621ab2b731b985.jpg?q=65&w=1200&h=421",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-54f37a9ad46037a43b1ebef28ebb0cca.jpg?q=65&w=600&h=886",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-5731003a3ccc09077aa321d7bbf23d65.jpg?q=65&w=600&h=824",
    ],
    slogan:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius malesuada nibh eget congue. Sed porta nibh nec dolor iaculis, eu maximus nisl egestas",
    description:
      " Nullam eu ante sit amet nisl euismod lobortis ut a metus. Etiam quis velit quis nulla tristique eleifend. Phasellus luctus volutpat tellus, ac convallis dui luctus in. Curabitur commodo mi a accumsan condimentum. Pellentesque vitae arcu arcu. Praesent lacus leo, vehicula nec commodo semper, convallis eget diam.",
    idylicStatus: ["Family Moment", "Friends Trip"],
    petFriendly: true,
    distinctiveFeatures: ["Lorem", "Lorem", "Lorem"],
    services: [],
    roomsDescriptions: [
      { room: "Room 1", description: "bed, tv, jacuzzi" },
      { room: "Room 2", description: "bed, tv, patio" },
    ],
    address: "13 rue Keller - Paris",
  },
  {
    name: "Damdam",
    country: "Spain",
    region: "Andalousie",
    numberOfPeople: 3,
    squareMeter: 450,
    bedrooms: 10,
    bathrooms: 6,
    view: "sea",
    pricePerWeek: 4000,
    startDate: "10 / 07 / 2023",
    endDate: "11 / 08 / 2023",
    galeryPhoto: [
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=600&h=372",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-342ef5a288146d3d09621ab2b731b985.jpg?q=65&w=1200&h=421",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-54f37a9ad46037a43b1ebef28ebb0cca.jpg?q=65&w=600&h=886",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-5731003a3ccc09077aa321d7bbf23d65.jpg?q=65&w=600&h=824",
    ],
    slogan:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius malesuada nibh eget congue. Sed porta nibh nec dolor iaculis, eu maximus nisl egestas",
    description:
      " Nullam eu ante sit amet nisl euismod lobortis ut a metus. Etiam quis velit quis nulla tristique eleifend. Phasellus luctus volutpat tellus, ac convallis dui luctus in. Curabitur commodo mi a accumsan condimentum. Pellentesque vitae arcu arcu. Praesent lacus leo, vehicula nec commodo semper, convallis eget diam.",
    idylicStatus: ["Family Moment"],
    petFriendly: true,
    distinctiveFeatures: ["Lorem", "Lorem", "Lorem"],
    services: ["6475bca7d026b3e05e3b5929", "6475bca7d026b3e05e3b5928"],
    roomsDescriptions: [
      { room: "Room 1", description: "bed, tv, jacuzzi" },
      { room: "Room 2", description: "bed, tv, patio" },
    ],
    address: "13 rue Keller - Paris",
  },
];

async function seed() {
  try {
    await Villa.deleteMany();
    await Villa.create(villas);
    console.log("create all villas", villas);
    process.exit();
  } catch (e) {
    console.log("there is an error villa seed");
  }
}

seed();
