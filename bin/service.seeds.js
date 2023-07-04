require("dotenv").config();
require("../db/index");
const ServiceDetail = require("../models/ServiceDetail.models");

const services = [
  {
    title: "Private Chef",
    slogan: "Indulge in culinary excellence",
    description:
      "Discover a world of exquisite flavors and dining experiences with our talented private chefs. From personalized menus to tantalizing creations, let your taste buds embark on a journey of gastronomic delight.",
    imageCover: "",
    imageServicePage: "",
  },
  {
    title: "Chauffeur",
    slogan: "Luxury rides at your command, redefine your travel experience",
    description:
      "Sit back, relax, and let our professional chauffeurs transport you in style. Experience the epitome of luxury and convenience as you embark on a seamless journey. From airport transfers to personalized tours, our chauffeurs provide exceptional service, ensuring every moment of your travel is as extraordinary as your destination. Enjoy the comfort and elegance of our meticulously maintained fleet, and let us redefine your travel experience with unparalleled attention to detail.",
    imageCover: "",
    imageServicePage: "",
  },
  {
    title: "Childcare",
    slogan: "Expert care for your little ones, peace of mind for you",
    description:
      "Trust your children's well-being to our professional and caring nannies. With a focus on safety, engagement, and nurturing, our dedicated team ensures a joyful and secure environment for your little ones. From interactive playtime to educational activities, we provide personalized care tailored to the needs and interests of each child. Enjoy peace of mind knowing your children are in capable hands, allowing you to relax and fully enjoy your stay worry-free.",
    imageCover: "",
    imageServicePage: "",
  },
  {
    title: "Ultimate Spa",
    slogan: "Indulge in luxurious bliss, a sanctuary of rejuvenation",
    description:
      "Immerse yourself in the epitome of relaxation and rejuvenation with our Ultimate Spa service. Our team of skilled professionals will pamper you with a range of exquisite treatments designed to revitalize your body, mind, and soul. From soothing massages to rejuvenating facials, from expert hairstyling to immaculate manicures and pedicures, we offer a comprehensive array of services. Experience ultimate bliss as you unwind in the comfort of your villa, surrounded by serene ambiance and indulgent luxury. Let us elevate your senses and leave you feeling refreshed, revitalized, and truly pampered.",
    imageCover: "",
    imageServicePage: "",
  },
  {
    title: "Personal Stylist",
    slogan: "Style tailored to perfection, embrace your unique elegance",
    description:
      "Let our expert personal stylists elevate your sense of style and redefine your wardrobe. With a keen eye for fashion and an understanding of your individual preferences, our stylists curate personalized looks that reflect your unique personality. From fashion consultations to tailored shopping experiences, embark on a transformative journey of elegance and sophistication. Whether it's for a special occasion or a complete wardrobe revamp, trust our stylists to guide you towards a new level of sartorial confidence. Embrace your unique elegance and step into a world of impeccable style.",
    imageCover: "",
    imageServicePage: "",
  },
  {
    title: "Exclusive Excursions",
    slogan: "Explore beyond the ordinary, curated for extraordinary moments",
    description:
      "Immerse yourself in a world of captivating discovery with our exclusive excursions. We curate unforgettable experiences that showcase the best of your destination, ensuring every moment is filled with awe and wonder. From private tours to hidden gems, we offer a range of carefully crafted itineraries that allow you to explore the culture, history, and natural beauty of your surroundings. Let us create moments of discovery that will leave you with cherished memories of your journey beyond the ordinary.",
    imageCover: "",
    imageServicePage: "",
  },
  {
    title: "Sport Coach",
    slogan: "Unleash your athletic potential, elevate your fitness journey",
    description:
      "Maximize your fitness goals and unleash your athletic potential with our skilled sport coaches. Whether you are a beginner or a seasoned athlete, our tailored programs and expert guidance will help you achieve optimal results. Experience exhilarating workouts, personalized training plans, and motivational support as you work towards your wellness goals. Let our coaches inspire you to push your limits, elevate your fitness journey, and embrace a healthier, more active lifestyle.",
    imageCover: "",
    imageServicePage: "",
  },
  {
    title: "Event Planner",
    slogan: "Unforgettable moments, flawlessly orchestrated",
    description:
      "From intimate gatherings to grand celebrations, entrust our talented event planners to create unforgettable moments for any occasion. With meticulous attention to detail and seamless coordination, we'll bring your vision to life, surpassing your expectations. From venue selection to decor, catering, and entertainment, our experienced team will craft a bespoke event tailored to your preferences. Let us handle every aspect of the planning process, ensuring your event is a resounding success.",
    imageCover: "",
    imageServicePage: "",
  },
  {
    title: "Yachting",
    slogan: "Sail into luxury, an unforgettable voyage awaits",
    description:
      "Embark on a breathtaking yachting experience and indulge in the ultimate luxury at sea. Our meticulously curated selection of stunning vessels offers the perfect setting for an unforgettable voyage. From picturesque coastlines to secluded coves, explore the world's most captivating destinations from a unique perspective. With personalized itineraries and attentive crew, we ensure an unparalleled yachting experience. Let us elevate your journey, creating memories that will last a lifetime.",
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
