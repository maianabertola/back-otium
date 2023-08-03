require("dotenv").config();
require("../db/index");
const ServiceDetail = require("../models/ServiceDetail.models");

const services = [
  {
    title: "Private Chef",
    slogan: "Indulge in culinary excellence",
    description:
      "Discover a world of exquisite flavors and dining experiences with our talented private chefs. From personalized menus to tantalizing creations, let your taste buds embark on a journey of gastronomic delight.",
    imageCover:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049521/OTIUM/Services/ChefService_eagzlb.jpg",
    imageServicePage:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049517/OTIUM/Services/ChefService2_yxldf3.jpg",
  },
  {
    title: "Chauffeur",
    slogan: "Luxury rides at your command, redefine your travel experience",
    description:
      "Experience luxury and convenience with our professional chauffeurs. Embark on a seamless journey, from airport transfers to personalized tours. Our chauffeurs deliver exceptional service to make every travel moment extraordinary. Enjoy the comfort and elegance of our meticulously maintained fleet. Let us redefine your travel experiences with unmatched attention to detail. Sit back, relax, and let us take the wheel",
    imageCover:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049518/OTIUM/Services/ChauffeurCover_aalmwz.jpg",
    imageServicePage:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049518/OTIUM/Services/Chauffeur_q1jmb9.jpg",
  },
  {
    title: "Childcare",
    slogan: "Expert care for your little ones, peace of mind for you",
    description:
      "Entrust your children's well-being to our professional, caring nannies. Focused on safety, engagement, and nurturing, our team creates a joyful, secure environment. Offering interactive playtime and educational activities, we deliver personalized care tailored to your child's needs. Enjoy peace of mind knowing your little ones are in capable hands, allowing you to indulge in your stay without worry.",
    imageCover:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049517/OTIUM/Services/Childcare_iw7axv.jpg",
    imageServicePage:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049519/OTIUM/Services/ChildCare2_opwcjh.jpg",
  },
  {
    title: "Ultimate Spa",
    slogan: "Indulge in luxurious bliss, a sanctuary of rejuvenation",
    description:
      "Experience relaxation and rejuvenation with our Ultimate Spa service. Our skilled professionals pamper you with a variety of exquisite treatments, revitalizing body and soul. Enjoy soothing massages, rejuvenating facials, expert hairstyling, and immaculate manicures. Unwind in the comfort of your villa, immersed in a serene ambiance and luxurious indulgence. Let us refresh and revitalize your senses, offering a truly pampered experience.",
    imageCover:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049516/OTIUM/Services/SpaCover_as6c2k.jpg",
    imageServicePage:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049516/OTIUM/Services/Spa_lgjich.jpg",
  },
  {
    title: "Personal Stylist",
    slogan: "Style tailored to perfection, embrace your unique elegance",
    description:
      "Experience personalized fashion guidance with our expert personal stylists. With an understanding of your individual style, they curate personalized looks that enhance your uniqueness. Enjoy fashion consultations and tailored shopping experiences. Perfect for a special occasion or a complete wardrobe revamp, let our stylists guide you towards refined elegance and impeccable style.",
    imageCover:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049517/OTIUM/Services/SytlistCover_yfr8kr.jpg",
    imageServicePage:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049519/OTIUM/Services/Stylist_ztbpex.jpg",
  },
  {
    title: "Exclusive Excursions",
    slogan: "Explore beyond the ordinary, curated for extraordinary moments",
    description:
      "Dive into a world of captivating discovery with our exclusive excursions. Uncover the best of your destination through private tours and hidden gems. Our carefully crafted itineraries let you explore the culture, history, and natural beauty around you. We create extraordinary experiences that go beyond the ordinary, leaving you with cherished memories.",
    imageCover:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049521/OTIUM/Services/Excurison_ljenht.jpg",
    imageServicePage:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049520/OTIUM/Services/Excursion_myrbzn.jpg",
  },
  {
    title: "Sport Coach",
    slogan: "Unleash your athletic potential, elevate your fitness journey",
    description:
      "Boost your fitness journey with our skilled sport coaches. Catering to all fitness levels, our personalized programs help you achieve optimal results. Get exhilarating workouts and expert guidance towards your wellness goals. Our coaches inspire you to elevate your fitness journey, promoting a healthier, more active lifestyle.",
    imageCover:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049522/OTIUM/Services/SportCover_umtpvg.jpg",
    imageServicePage:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049517/OTIUM/Services/Sport_ejqaml.jpg",
  },
  {
    title: "Event Planner",
    slogan: "Unforgettable moments, flawlessly orchestrated",
    description:
      "From intimate gatherings to grand events, trust our planners to create unforgettable moments. We attend to every detail, bringing your vision to life with seamless coordination. Our team crafts bespoke events, handling venue selection, decor, catering, and more, for a successful occasion.",
    imageCover:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049521/OTIUM/Services/EventCover_zmpwzy.jpg",
    imageServicePage:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049516/OTIUM/Services/Event_v7rqy6.jpg",
  },
  {
    title: "Yachting",
    slogan: "Sail into luxury, an unforgettable voyage awaits",
    description:
      "Embark on a breathtaking yachting adventure with ultimate sea luxury. Explore picturesque coastlines and secluded coves from stunning vessels with personalized itineraries. Our attentive crew ensures an unparalleled yachting experience, creating lasting memories.",
    imageCover:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049520/OTIUM/Services/Yachting_owxuhn.jpg",
    imageServicePage:
      "https://res.cloudinary.com/dspbzkolr/image/upload/v1691049520/OTIUM/Services/Yachting2_lonzqt.jpg",
  },
];

async function seed() {
  try {
    await ServiceDetail.deleteMany();
    await ServiceDetail.create(services);
    console.log("create all services", services);
    process.exit();
  } catch (e) {
    console.log("there is an error with the service seed", e);
  }
}

seed();
