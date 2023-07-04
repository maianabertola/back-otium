require("dotenv").config();
require("../db/index");

const Villa = require("../models/Villa.model");

const villas = [
  {
    name: "Villa Monica",
    country: "Italy",
    region: "Toscana",
    numberOfPeople: 7,
    squareMeter: 230,
    bedrooms: 5,
    bathrooms: 6,
    view: "Mountain",
    pricePerWeek: 3470,
    bookedDates: [
      {
        Start: "2023-06-10T18:51:04.000Z",
        End: "2023-06-18T18:51:04.000Z",
      },
      {
        Start: "2023-07-10T18:51:04.000Z",
        End: "2023-07-18T18:51:04.000Z",
      },
    ],
    previewPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-14-951697a8333fc83ebba9351ea20e7148.jpg?q=65&w=300&h=448",
    heroPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=1500",
    galeryPhoto: [
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=600&h=372",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-342ef5a288146d3d09621ab2b731b985.jpg?q=65&w=1200&h=421",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-54f37a9ad46037a43b1ebef28ebb0cca.jpg?q=65&w=600&h=886",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-5731003a3ccc09077aa321d7bbf23d65.jpg?q=65&w=600&h=824",
    ],
    tagline: "Tuscan Bliss, Ultimate Relaxation",
    slogan: "Discover Tranquility and Luxury at our Exquisite Tuscan Villa",
    description:
      " Nestled amidst the breathtaking landscapes of Tuscany, our villa offers a sublime escape. Immerse yourself in timeless elegance and refined comforts, surrounded by rolling hills, vineyards, and olive groves. Indulge in the charm of the nearby villages, explore historical sites, savor local gastronomy, or simply unwind by the pool, soaking in the serenity. Experience the essence of Tuscan living at its finest.      .",
    idylicStatus: ["Family Moment", "Friends Trip"],
    petFriendly: true,
    distinctiveFeatures: [
      "Serene Countryside Setting",
      "Authentic Tuscan Architecture",
      "Proximity to Cultural Gems",
    ],
    services: ["647cc042fe3aca1e35638690"],
    roomsDescriptions: [
      { room: "Room 1", description: "bed, tv, jacuzzi" },
      { room: "Room 2", description: "bed, tv, patio" },
    ],
    address: "13 rue Keller - Paris",
  },
  {
    name: "Villa Florence",
    country: "France",
    region: "Nice",
    numberOfPeople: 5,
    squareMeter: 430,
    bedrooms: 7,
    bathrooms: 10,
    view: "Sea",
    pricePerWeek: 4280,
    bookedDates: [
      {
        Start: "2023-06-10T18:51:04.000Z",
        End: "2023-06-18T18:51:04.000Z",
      },
      {
        Start: "2023-07-10T18:51:04.000Z",
        End: "2023-07-18T18:51:04.000Z",
      },
    ],
    previewPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-14-951697a8333fc83ebba9351ea20e7148.jpg?q=65&w=300&h=448",
    heroPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=1500",
    galeryPhoto: [
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=600&h=372",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-342ef5a288146d3d09621ab2b731b985.jpg?q=65&w=1200&h=421",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-54f37a9ad46037a43b1ebef28ebb0cca.jpg?q=65&w=600&h=886",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-5731003a3ccc09077aa321d7bbf23d65.jpg?q=65&w=600&h=824",
    ],
    tagline: "Retreat in the Heart of Nice",
    slogan: "Experience Luxury and Sophistication in the Charming City of Nice",
    description:
      "Indulge in the opulence of Villa Florence, nestled in the heart of Nice. This exquisite villa offers luxurious accommodations, breathtaking views of the French Riviera, and easy access to the city's vibrant culture, stunning beaches, and renowned cuisine.",
    idylicStatus: ["Family Moment", "Friends Trip"],
    petFriendly: true,
    distinctiveFeatures: [
      "Rooftop Terrace",
      "Elegant Interiors",
      "Stunning Sea Views",
      "Close to City Center",
    ],
    services: ["647cc042fe3aca1e35638690"],
    roomsDescriptions: [
      { room: "Room 1", description: "bed, tv, jacuzzi" },
      { room: "Room 2", description: "bed, tv, patio" },
    ],
    address: "13 rue Keller - Paris",
  },
  {
    name: "Villa Marguerite",
    country: "France",
    region: "Cassis",
    numberOfPeople: 7,
    squareMeter: 230,
    bedrooms: 5,
    bathrooms: 6,
    view: "Mountain",
    pricePerWeek: 1200,
    bookedDates: [
      {
        Start: "2023-06-10T18:51:04.000Z",
        End: "2023-06-18T18:51:04.000Z",
      },
      {
        Start: "2023-07-10T18:51:04.000Z",
        End: "2023-07-18T18:51:04.000Z",
      },
    ],
    previewPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-14-951697a8333fc83ebba9351ea20e7148.jpg?q=65&w=300&h=448",
    heroPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=1500",
    galeryPhoto: [
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=600&h=372",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-342ef5a288146d3d09621ab2b731b985.jpg?q=65&w=1200&h=421",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-54f37a9ad46037a43b1ebef28ebb0cca.jpg?q=65&w=600&h=886",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-5731003a3ccc09077aa321d7bbf23d65.jpg?q=65&w=600&h=824",
    ],
    tagline: "Captivating Coastal Haven",
    slogan: "Escape to Villa Marguerite and Revel in the Beauty of Cassis",
    description:
      "Discover pure bliss at Villa Marguerite, a seaside retreat nestled in the enchanting town of Cassis. With its idyllic location, charming ambiance, and panoramic views of the Mediterranean Sea, this villa offers a perfect blend of relaxation, coastal adventures, and Provençal charm.",
    idylicStatus: ["Family Moment"],
    petFriendly: true,
    distinctiveFeatures: [
      "Panoramic Ocean Views",
      "Infinity Pool",
      "Serene Countryside Setting:",
      "Direct Beach Access",
      "Outdoor BBQ Area",
    ],
    services: ["647cc042fe3aca1e35638690"],
    roomsDescriptions: [
      { room: "Room 1", description: "bed, tv, jacuzzi" },
      { room: "Room 2", description: "bed, tv, patio" },
    ],
    address: "13 rue Keller - Paris",
  },
  {
    name: "Villa Paula",
    country: "Spain",
    region: "Alicante",
    numberOfPeople: 3,
    squareMeter: 450,
    bedrooms: 10,
    bathrooms: 6,
    view: "Sea",
    pricePerWeek: 4000,
    bookedDates: [
      {
        Start: "2023-06-16T18:51:04.000Z",
        End: "2023-06-18T18:51:04.000Z",
      },
      {
        Start: "2023-07-01T18:51:04.000Z",
        End: "2023-07-05T18:51:04.000Z",
      },
    ],
    previewPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-14-951697a8333fc83ebba9351ea20e7148.jpg?q=65&w=300&h=448",
    heroPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=1500",
    galeryPhoto: [
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=600&h=372",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-342ef5a288146d3d09621ab2b731b985.jpg?q=65&w=1200&h=421",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-54f37a9ad46037a43b1ebef28ebb0cca.jpg?q=65&w=600&h=886",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-5731003a3ccc09077aa321d7bbf23d65.jpg?q=65&w=600&h=824",
    ],
    tagline: "Tranquil Oasis in Sunny Alicante",
    slogan: "Find Tranquility and Sunshine at Villa Paula in Alicante",
    description:
      "Immerse yourself in a tranquil oasis at Villa Paula, located in the sunny coastal city of Alicante. This charming villa offers a private escape with lush gardens, a sparkling swimming pool, and a peaceful atmosphere. Enjoy the Mediterranean climate, explore beautiful beaches, and experience the vibrant Spanish culture.",
    idylicStatus: ["Friends Trip", "Life Party"],
    petFriendly: true,
    distinctiveFeatures: [
      "Serene Garden Retreat",
      "Large Swimming Pool",
      "Outdoor Dining Area",
      "Proximity to Beaches",
    ],
    services: ["647cc042fe3aca1e35638691", "647cc042fe3aca1e35638690"],
    roomsDescriptions: [
      { room: "Room 1", description: "bed, tv, jacuzzi" },
      { room: "Room 2", description: "bed, tv, patio" },
    ],
    address: "13 rue Keller - Paris",
  },
  {
    name: "Villa Manolia",
    country: "Spain",
    region: "Mallorca",
    numberOfPeople: 3,
    squareMeter: 450,
    bedrooms: 10,
    bathrooms: 6,
    view: "Sea",
    pricePerWeek: 4000,
    bookedDates: [
      {
        Start: "2023-06-16T18:51:04.000Z",
        End: "2023-06-18T18:51:04.000Z",
      },
      {
        Start: "2023-07-01T18:51:04.000Z",
        End: "2023-07-05T18:51:04.000Z",
      },
    ],
    previewPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-14-951697a8333fc83ebba9351ea20e7148.jpg?q=65&w=300&h=448",
    heroPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=1500",
    galeryPhoto: [
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=600&h=372",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-342ef5a288146d3d09621ab2b731b985.jpg?q=65&w=1200&h=421",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-54f37a9ad46037a43b1ebef28ebb0cca.jpg?q=65&w=600&h=886",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-5731003a3ccc09077aa321d7bbf23d65.jpg?q=65&w=600&h=824",
    ],
    tagline: "Idyllic Paradise in Mallorca",
    slogan: "Experience Paradise at Villa Manolia in Captivating Mallorca",
    description:
      "Escape to Villa Manolia, a true paradise nestled in the captivating island of Mallorca. Surrounded by stunning natural beauty, this villa offers a harmonious blend of luxury, privacy, and tranquility. From pristine beaches to charming villages, Mallorca offers endless exploration and relaxation.",
    idylicStatus: ["Friends Trip", "Life Party"],
    petFriendly: true,
    distinctiveFeatures: [
      "Idyllic Countryside Setting",
      "Private Tennis Court",
      "Lush Gardens",
      "Relaxing Jacuzzi",
    ],
    services: ["647cc042fe3aca1e35638691", "647cc042fe3aca1e35638690"],
    roomsDescriptions: [
      { room: "Room 1", description: "bed, tv, jacuzzi" },
      { room: "Room 2", description: "bed, tv, patio" },
    ],
    address: "13 rue Keller - Paris",
  },
  {
    name: "Villa Paloma",
    country: "Spain",
    region: "Granada",
    numberOfPeople: 3,
    squareMeter: 450,
    bedrooms: 10,
    bathrooms: 6,
    view: "Mountain",
    pricePerWeek: 4000,
    bookedDates: [
      {
        Start: "2023-06-16T18:51:04.000Z",
        End: "2023-06-18T18:51:04.000Z",
      },
      {
        Start: "2023-07-01T18:51:04.000Z",
        End: "2023-07-05T18:51:04.000Z",
      },
    ],
    previewPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-14-951697a8333fc83ebba9351ea20e7148.jpg?q=65&w=300&h=448",
    heroPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=1500",
    galeryPhoto: [
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=600&h=372",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-342ef5a288146d3d09621ab2b731b985.jpg?q=65&w=1200&h=421",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-54f37a9ad46037a43b1ebef28ebb0cca.jpg?q=65&w=600&h=886",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-5731003a3ccc09077aa321d7bbf23d65.jpg?q=65&w=600&h=824",
    ],
    tagline: "Unforgettable Retreat in Granada",
    slogan: "Discover Unforgettable Beauty at Villa Paloma in Granada",
    description:
      "Immerse yourself in the enchanting beauty of Granada at Villa Paloma. Located in the heart of Andalusia, this villa offers a unique blend of Moorish charm, breathtaking views of the Alhambra, and a serene setting surrounded by picturesque gardens. Experience the rich history, vibrant culture, and culinary delights of Granada.",
    idylicStatus: ["Family Moment", "Life Party"],
    petFriendly: true,
    distinctiveFeatures: ["Lorem", "Lorem", "Lorem"],
    services: ["647cc042fe3aca1e35638691", "647cc042fe3aca1e35638690"],
    roomsDescriptions: [
      { room: "Room 1", description: "bed, tv, jacuzzi" },
      { room: "Room 2", description: "bed, tv, patio" },
    ],
    address: "13 rue Keller - Paris",
  },
  {
    name: "Villa Augusta",
    country: "Italy",
    region: "Ostuni",
    numberOfPeople: 3,
    squareMeter: 450,
    bedrooms: 10,
    bathrooms: 6,
    view: "Mountain",
    pricePerWeek: 4000,
    bookedDates: [
      {
        Start: "2023-06-16T18:51:04.000Z",
        End: "2023-06-18T18:51:04.000Z",
      },
      {
        Start: "2023-07-01T18:51:04.000Z",
        End: "2023-07-05T18:51:04.000Z",
      },
    ],
    previewPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-14-951697a8333fc83ebba9351ea20e7148.jpg?q=65&w=300&h=448",
    heroPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=1500",
    galeryPhoto: [
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=600&h=372",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-342ef5a288146d3d09621ab2b731b985.jpg?q=65&w=1200&h=421",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-54f37a9ad46037a43b1ebef28ebb0cca.jpg?q=65&w=600&h=886",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-5731003a3ccc09077aa321d7bbf23d65.jpg?q=65&w=600&h=824",
    ],
    tagline: "Tranquility and Charm in Ostuni",
    slogan: "Embrace Tranquility and Charm at Villa Augusta in Ostuni",
    description:
      "Experience the beauty of Ostuni at Villa Augusta, a tranquil haven nestled in the heart of Puglia. With its rustic elegance, lush olive groves, and panoramic views of the countryside, this villa offers a serene escape. Discover the historic charm of Ostuni, explore stunning beaches, and indulge in authentic Italian cuisine.",
    idylicStatus: ["Family Moment", "Life Party"],
    petFriendly: true,
    distinctiveFeatures: ["Lorem", "Lorem", "Lorem"],
    services: ["647cc042fe3aca1e35638691", "647cc042fe3aca1e35638690"],
    roomsDescriptions: [
      { room: "Room 1", description: "bed, tv, jacuzzi" },
      { room: "Room 2", description: "bed, tv, patio" },
    ],
    address: "13 rue Keller - Paris",
  },
  {
    name: "Villa Adamaria",
    country: "Italy",
    region: "Amalfi",
    numberOfPeople: 3,
    squareMeter: 450,
    bedrooms: 10,
    bathrooms: 6,
    view: "Sea",
    pricePerWeek: 4000,
    bookedDates: [
      {
        Start: "2023-06-16T18:51:04.000Z",
        End: "2023-06-18T18:51:04.000Z",
      },
      {
        Start: "2023-07-01T18:51:04.000Z",
        End: "2023-07-05T18:51:04.000Z",
      },
    ],
    previewPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-14-951697a8333fc83ebba9351ea20e7148.jpg?q=65&w=300&h=448",
    heroPhoto:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=1500",
    galeryPhoto: [
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-558ec93468e83e36d2cf1b05f1440d77.jpg?q=65&w=600&h=372",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-342ef5a288146d3d09621ab2b731b985.jpg?q=65&w=1200&h=421",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-54f37a9ad46037a43b1ebef28ebb0cca.jpg?q=65&w=600&h=886",
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4283/2021-04-13-5731003a3ccc09077aa321d7bbf23d65.jpg?q=65&w=600&h=824",
    ],
    tagline: "Breathtaking, Luxurious holidays",
    slogan:
      "Experience Breathtaking Luxury at Villa Adamaria on the Amalfi Coast",
    description:
      "Unwind in the lap of luxury at Villa Adamaria, perched on the stunning Amalfi Coast. With its elegant design, panoramic terraces, and mesmerizing views of the Mediterranean Sea, this villa offers an unforgettable experience. Explore the charming coastal towns, savor delect.",
    idylicStatus: ["Family Moment", "Life Party"],
    petFriendly: true,
    distinctiveFeatures: [
      "Breathtaking Amalfi Coast Views",
      "Infinity Pool with Sea View",
      "Stylish and Luxurious Interiors",
      "Spacious Sun Terrace",
    ],
    services: ["647cc042fe3aca1e35638691", "647cc042fe3aca1e35638690"],
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
    console.log("there is an error with the villa seeds", e);
  }
}

seed();
