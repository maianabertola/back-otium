require("../db/index");
require("dotenv/config");

const Villa = require("../models/Villa.model");

const villas = [
  {
    name: "Fabine",
    country: "Italy",
    region: "Toscana",
    numberPeople: {
      min: 2,
      max: 10,
    },
    squareMetter: 230,
    bedrooms: 5,
    bathrooms: 6,
    views: "mountain",
    pricePerWeek: 1200,
    galeryPhoto: [
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=600&h=372",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-342ef5a288146d3d09621ab2b731b985.jpg?q=65&w=1200&h=421",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-54f37a9ad46037a43b1ebef28ebb0cca.jpg?q=65&w=600&h=886",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-5731003a3ccc09077aa321d7bbf23d65.jpg?q=65&w=600&h=824",
    ],
    slogan:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius malesuada nibh eget congue. Sed porta nibh nec dolor iaculis, eu maximus nisl egestas",
    descriptionText:
      " Nullam eu ante sit amet nisl euismod lobortis ut a metus. Etiam quis velit quis nulla tristique eleifend. Phasellus luctus volutpat tellus, ac convallis dui luctus in. Curabitur commodo mi a accumsan condimentum. Pellentesque vitae arcu arcu. Praesent lacus leo, vehicula nec commodo semper, convallis eget diam.",
    idylicStatus: "Family Moment", "Life Party",
    petFriendly: true,
    distinctiveFeatures: ["Lorem", "Lorem", "Lorem"],
    services: [Schema.Types.ObjectId],
    descriptionPieces: [
      "Room 1 : bed, tv, jacuzzi",
      "Room 2 : bed, tv, jacuzzi",
      "Room 3 : bed, tv, dressing",
    ],
    address: "13 rue Keller - Paris",
  },
  {
    name: "Damdam",
    country: "Spain",
    region: "Andalousie",
    numberPeople: {
      min: 5,
      max: 9,
    },
    squareMetter: 450,
    bedrooms: 10,
    bathrooms: 6,
    views: "sea",
    pricePerWeek: 4000,
    galeryPhoto: [
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=600&h=372",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-342ef5a288146d3d09621ab2b731b985.jpg?q=65&w=1200&h=421",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-54f37a9ad46037a43b1ebef28ebb0cca.jpg?q=65&w=600&h=886",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-5731003a3ccc09077aa321d7bbf23d65.jpg?q=65&w=600&h=824",
    ],
    slogan:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius malesuada nibh eget congue. Sed porta nibh nec dolor iaculis, eu maximus nisl egestas",
    descriptionText:
      " Nullam eu ante sit amet nisl euismod lobortis ut a metus. Etiam quis velit quis nulla tristique eleifend. Phasellus luctus volutpat tellus, ac convallis dui luctus in. Curabitur commodo mi a accumsan condimentum. Pellentesque vitae arcu arcu. Praesent lacus leo, vehicula nec commodo semper, convallis eget diam.",
    idylicStatus: "famillyMoment",
    petFriendly: true,
    distinctiveFeatures: ["Lorem", "Lorem", "Lorem"],
    services: [Schema.Types.ObjectId],
    descriptionPieces: [
      "Room 1 : bed, tv, jacuzzi",
      "Room 2 : bed, tv, jacuzzi",
      "Room 3 : bed, tv, dressing",
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
    next(e);
    console.log("there is an error");
  }
}

seed();
