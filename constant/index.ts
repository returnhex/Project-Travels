import {
  andaman,
  barcelona,
  beach1,
  beach2,
  beach3,
  beach4,
  beijingCity,
  ChandranathHill,
  costaBrava,
  dighapatiaRajbari,
  floatingMarkets,
  glassBridge,
  goa,
  granada,
  guliakhaliBeach,
  guthiaMosque,
  jaflong,
  kashmir,
  kerala,
  kuakata,
  ladakh,
  lalakal,
  lauachora,
  madrid,
  mallorca,
  menorca,
  mutianyuWall,
  niladriLake,
  pangthumai,
  patangaBeach,
  puthiaTemple,
  Rajasthan,
  rajshahiUniversity,
  ratargul,
  sanSebastian,
  shanghai,
  shimulBagan,
  sikkim,
  somapuraMahavihara,
  sondip,
  sundarban,
  tajMahal,
  tanguarHaor,
  teaGarden,
  zhangjiajieForest,
} from "~/assets/image/destination";

import mailIcon from "../assets/image/assests/ContactUs/mail.svg";
import mapsIcon from "../assets/image/assests/ContactUs/maps.svg";
import contactIcon from "../assets/image/assests/ContactUs/phone.svg";

import {
  japan,
  saintMartin,
  spain,
  sundorbon,
  sylhetSunamganj,
  sylhetTea,
  thailand,
} from "~/assets/image/destination/index";
// Blog Image
import blogImg1 from "@/assets/image/blog1.png";
import blogImg2 from "@/assets/image/blog2.png";
import blogImg3 from "@/assets/image/blog3.png";
import blogImg4 from "@/assets/image/blog4.png";
import blogImg5 from "@/assets/image/blog5.png";
import blogImg6 from "@/assets/image/blog6.png";
// VGM Image
import aimArrow from "../assets/image/assests/OutGoal/aim-arrow.svg";
import aimBanner from "../assets/image/assests/OutGoal/aim-banner.png";

import visionBanner from "../assets/image/assests/OurVission/vision-banner.png";
import visionIcon from "../assets/image/assests/OurVission/vison-icon.svg";

import missionBanner from "../assets/image/assests/OurMission/mission-banner.png";
import missionIcon from "../assets/image/assests/OurMission/mission-icon.png";

const destinations = [
  {
    country: "Bangladesh",
    divisions: [
      {
        city: "Cox-Bazar",
        packages: [
          {
            title: "Relaxing Ocean View Stay in Cox's Bazar",
            location: "Cox's Bazar, Bangladesh",
            duration: "3 Days, 2 Nights",
            image: beach3,
          },
          {
            title: "Luxury Beach Resort Experience in Cox's Bazar",
            location: "Cox's Bazar, Bangladesh",
            duration: "4 Days, 3 Nights",
            image: beach1,
          },
          {
            title: "Romantic Beach Getaway for Couples in Cox's Bazar",
            location: "Cox's Bazar, Bangladesh",
            duration: "2 Days, 1 Night",
            image: beach4,
          },
          {
            title: "Family Friendly Beach Vacation in Cox's Bazar",
            location: "Cox's Bazar, Bangladesh",
            duration: "5 Days, 4 Nights",
            image: beach2,
          },
        ],
      },
      {
        city: "Sylhet",
        packages: [
          {
            title: "Scenic Jaflong Hills and River Tour in Sylhet",
            location: "Jaflong, Sylhet",
            duration: "1 Day Tour",
            image: jaflong,
          },
          {
            title: "Blue Waters and Boating at Lalakhal in Sylhet",
            location: "Lalakhal, Sylhet",
            duration: "1 Day Tour",
            image: lalakal,
          },
          {
            title: "Nature Walks in Lauachora Forest, Sylhet",
            location: "Lauachora, Sylhet",
            duration: "2 Days, 1 Night",
            image: lauachora,
          },
          {
            title: "Niladri Lake Visit with Scenic Surroundings",
            location: "Niladri Lake, Sylhet",
            duration: "1 Day Tour",
            image: niladriLake,
          },
          {
            title: "Pangthumai Waterfall Adventure",
            location: "Pangthumai, Sylhet",
            duration: "1 Day Tour",
            image: pangthumai,
          },
          {
            title: "Boat Safari through Ratargul Swamp Forest",
            location: "Ratargul, Sylhet",
            duration: "1 Day Tour",
            image: ratargul,
          },
          {
            title: "Shimul Bagan Forest Excursion in Sylhet",
            location: "Shimul Bagan, Sylhet",
            duration: "1 Day Tour",
            image: shimulBagan,
          },
          {
            title: "Tanguar Haor Floating Village Experience",
            location: "Tanguar Haor, Sylhet",
            duration: "2 Days, 1 Night",
            image: tanguarHaor,
          },
          {
            title: "Walk Through Sylhet’s Tea Garden Landscapes",
            location: "Tea Garden, Sylhet",
            duration: "1 Day Tour",
            image: teaGarden,
          },
        ],
      },
      {
        city: "Chattogram",
        packages: [
          {
            title: "Hiking Chandranath Hill in Chattogram",
            location: "Sitakunda, Chattogram",
            duration: "1 Day Tour",
            image: ChandranathHill,
          },
          {
            title: "Explore Guliakhali Beach and Sand Dunes",
            location: "Guliakhali, Chattogram",
            duration: "1 Day Tour",
            image: guliakhaliBeach,
          },
          {
            title: "Sunset at Patenga Beach with Local Food",
            location: "Patenga, Chattogram",
            duration: "1 Day Tour",
            image: patangaBeach,
          },
          {
            title: "Island Adventure at Sandwip, Chattogram",
            location: "Sandwip, Chattogram",
            duration: "2 Days, 1 Night",
            image: sondip,
          },
        ],
      },
      {
        city: "Rajshahi",
        packages: [
          {
            title: "Visit Historic Dighapatia Rajbari Palace",
            location: "Natore, Rajshahi",
            duration: "1 Day Tour",
            image: dighapatiaRajbari,
          },
          {
            title: "Explore Ancient Puthia Temple Complex",
            location: "Puthia, Rajshahi",
            duration: "1 Day Tour",
            image: puthiaTemple,
          },
          {
            title: "Tour Rajshahi University Campus and Grounds",
            location: "Rajshahi University, Rajshahi",
            duration: "1 Day Tour",
            image: rajshahiUniversity,
          },
          {
            title: "Discover Somapura Mahavihara Ruins",
            location: "Paharpur, Rajshahi",
            duration: "2 Days, 1 Night",
            image: somapuraMahavihara,
          },
        ],
      },
      {
        city: "Barisal",
        packages: [
          {
            title: "Experience Floating Markets of Barisal City",
            location: "Barisal City, Barisal",
            duration: "1 Day Tour",
            image: floatingMarkets,
          },
          {
            title: "Visit Guthia Mosque with Stunning Architecture",
            location: "Barisal Sadar, Barisal",
            duration: "1 Day Tour",
            image: guthiaMosque,
          },
          {
            title: "Relax at Kuakata Beach with Beautiful Views",
            location: "Kuakata, Barisal",
            duration: "3 Days, 2 Nights",
            image: kuakata,
          },
          {
            title: "Explore Sundarban Wildlife and Mangroves",
            location: "Sundarbans, Barisal",
            duration: "4 Days, 3 Nights",
            image: sundarban,
          },
        ],
      },
    ],
  },
  {
    country: "India",
    packages: [
      {
        title: "Rajasthan Royal Heritage Tour with Palaces Visit",
        location: "Rajasthan, India",
        duration: "4 Days, 3 Nights",
        image: Rajasthan,
      },
      {
        title: "Andaman Islands Tropical Island Getaway",
        location: "Andaman, India",
        duration: "5 Days, 4 Nights",
        image: andaman,
      },
      {
        title: "Goa Beach Life with Nightlife and Water Sports",
        location: "Goa, India",
        duration: "3 Days, 2 Nights",
        image: goa,
      },
      {
        title: "Snowy Mountains and Culture of Kashmir",
        location: "Kashmir, India",
        duration: "5 Days, 4 Nights",
        image: kashmir,
      },
      {
        title: "Kerala Backwaters Houseboat and Nature Tour",
        location: "Kerala, India",
        duration: "4 Days, 3 Nights",
        image: kerala,
      },
      {
        title: "Ladakh Mountain Adventure and Monasteries",
        location: "Ladakh, India",
        duration: "6 Days, 5 Nights",
        image: ladakh,
      },
      {
        title: "Sikkim Himalayan Nature and Village Life",
        location: "Sikkim, India",
        duration: "4 Days, 3 Nights",
        image: sikkim,
      },
      {
        title: "Taj Mahal Visit: Monument of Love Tour",
        location: "Agra, India",
        duration: "1 Day Tour",
        image: tajMahal,
      },
    ],
  },
  {
    country: "China",
    packages: [
      {
        title: "Beijing City Tour of History and Culture",
        location: "Beijing, China",
        duration: "3 Days, 2 Nights",
        image: beijingCity,
      },
      {
        title: "Zhangjiajie Glass Bridge Adventure Walk",
        location: "Zhangjiajie, China",
        duration: "2 Days, 1 Night",
        image: glassBridge,
      },
      {
        title: "Hiking Mutianyu Section of Great Wall",
        location: "Mutianyu, China",
        duration: "1 Day Tour",
        image: mutianyuWall,
      },
      {
        title: "Shanghai Modern City and Nightlife Tour",
        location: "Shanghai, China",
        duration: "3 Days, 2 Nights",
        image: shanghai,
      },
      {
        title: "Zhangjiajie Forest with Avatar Mountains",
        location: "Zhangjiajie, China",
        duration: "3 Days, 2 Nights",
        image: zhangjiajieForest,
      },
    ],
  },
  {
    country: "Spain",
    packages: [
      {
        title: "Barcelona Wonders & Culture",
        location: "Barcelona, Spain",
        duration: "3 Days, 2 Nights",
        image: barcelona,
      },
      {
        title: "Costa Brava Beach and Mediterranean Flavors",
        location: "Costa Brava, Spain",
        duration: "2 Days, 1 Night",
        image: costaBrava,
      },
      {
        title: "Granada Alhambra Palace and Historic Tour",
        location: "Granada, Spain",
        duration: "2 Days, 1 Night",
        image: granada,
      },
      {
        title: "Madrid Museums and Historic Squares Visit",
        location: "Madrid, Spain",
        duration: "3 Days, 2 Nights",
        image: madrid,
      },
      {
        title: "Mallorca Island Beaches and Nightlife Tour",
        location: "Mallorca, Spain",
        duration: "4 Days, 3 Nights",
        image: mallorca,
      },
      {
        title: "Menorca Quiet Beaches and Local Life",
        location: "Menorca, Spain",
        duration: "3 Days, 2 Nights",
        image: menorca,
      },
      {
        title: "San Sebastián Culinary and Coastal Tour",
        location: "San Sebastián, Spain",
        duration: "2 Days, 1 Night",
        image: sanSebastian,
      },
    ],
  },
];

export const navItems: {
  title: string;
  navigate: string;
  activeClassName?: string;
}[] = [
  {
    title: "Home",
    navigate: "/",
    activeClassName: "home",
  },
  {
    title: "About us",
    navigate: "/about-us",
  },
  {
    title: "Destinations",
    navigate: "/destinations",
  },
  {
    title: "Blog",
    navigate: "/blogs",
  },
  {
    title: "Contact Us",
    navigate: "/contact-us",
  },
];

export const aboutBdGioConstants = [
  "Trusted, Local Travel Experts",
  "Flexible, Hassle-Free Bookings",
  "Real-Timing Itinerary Updates",
];

export const cards = [
  {
    image: "/blog1.png",
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
  {
    image: "/blog2.png",
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
  {
    image: "/blog3.png",
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
  {
    image: "/blog1.png",
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
  {
    image: "/blog2.png",
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
];

export const features = [
  {
    icon: "/assests/WhyChoseUs/globe.svg",
    title: "Diverse Destinations",
    desc: "This revision improves clarity and flow while maintaining your original message.",
  },
  {
    title: "Best Travel Guide",
    icon: "/assests/WhyChoseUs/guide.svg",
    desc: "This revision improves clarity and flow while maintaining your original message.",
  },
  {
    title: "Easy Booking",
    icon: "/assests/WhyChoseUs/booking.svg",
    desc: "This revision improves clarity and flow while maintaining your original message.",
  },
  {
    title: "Best Flight",
    icon: "/assests/WhyChoseUs/flight.svg",
    desc: "This revision improves clarity and flow while maintaining your original message.",
  },
  {
    title: "Value for Money",
    icon: "/assests/WhyChoseUs/money.svg",
    desc: "This revision improves clarity and flow while maintaining your original message.",
  },
  {
    title: "Support Team",
    icon: "/assests/WhyChoseUs/team.svg",
    desc: "This revision improves clarity and flow while maintaining your original message.",
  },
];

export const contactFeatures = [
  {
    icon: mapsIcon,
    title: "Our Address",
    desc: "23, Tropical Akhand Tower (Level # 03-05),  Gareeb-e-Nawaz Ave, Sector # 11, Uttara,  Dhaka - 1230",
  },
  {
    icon: mailIcon,
    title: "Contact@bdigo.com",
    desc: "Email Us any time any kind of quety.",
  },
  {
    icon: contactIcon,
    title: "+880 1855-255 342",
    desc: "Call Us any kind support. We will wait for it.",
  },
];

export const stats = [
  {
    icon: "/icon/SafetyIcon1.png",
    value: 76,
    label: "Satisfied Customer",
    bg: "bg-[#FBFBFB]",
  },
  {
    icon: "/icon/SafetyIcon2.png",
    value: 14,
    label: "Active Members",
    bg: "bg-[#EDEDED]",
  },
  {
    icon: "/icon/SafetyIcon3.png",
    value: 1,
    label: "Travels Destination",
    bg: "bg-[#FBFBFB]",
  },
  {
    icon: "/icon/SafetyIcon4.png",
    value: 35,
    label: "Travel Guides",
    bg: "bg-[#EDEDED]",
  },
];

export const places = [
  {
    name: "Japan",
    image: japan,
    category: "international",
  },
  {
    name: "Saint Martin",
    image: saintMartin,
    category: "domestic",
  },
  {
    name: "Thailand",
    image: thailand,
    category: "international",
  },
  {
    name: "Sunamganj",
    image: sylhetSunamganj,
    category: "domestic",
  },
  {
    name: "Spain",
    image: spain,
    category: "international",
  },
  {
    name: "SreeMangal",
    image: sylhetTea,
    category: "domestic",
  },
  {
    name: "Sundarbans",
    image: sundorbon,
    category: "domestic",
  },
];

export const workFeatures = [
  {
    icon: "/assests/HowItWork/destination.svg",
    title: "Select Destination",
    desc: "This revision improves clarity and flow while maintaining your original message. This revision improves clarity .",
  },
  {
    title: "Make An Appointments",
    icon: "/assests/HowItWork/destination.svg",
    desc: "This revision improves clarity and flow while maintaining your original message. This revision improves clarity .",
  },
  {
    title: "Enjoy Our Tour",
    icon: "/assests/HowItWork/destination.svg",
    desc: "This revision improves clarity and flow while maintaining your original message. This revision improves clarity .",
  },
];

type TBlog = {
  img: string;
  date: string;
  title: string;
  subtitle: string;
  category: string;
};
export const blogPosts: TBlog[] = [
  {
    img: blogImg1,
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    subtitle:
      "Keeping the structure clear and focusing on what makes special, travelers.",
    category: "Travel",
  },
  {
    img: blogImg2,
    date: "December 7, 2024",
    title: "Top Hidden Spots in Great Places",
    subtitle: "Explore the most beautiful places you’ve never heard of.",
    category: "Great Places",
  },
  {
    img: blogImg3,
    date: "December 10, 2024",
    title: "Why Tourists Love This Secret Beach",
    subtitle: "Uncover what brings thousands of tourists here every year.",
    category: "Tourists",
  },
  {
    img: blogImg4,
    date: "December 12, 2024",
    title: "Sea Adventures You Must Experience",
    subtitle: "From scuba diving to deep-sea surfing — live the thrill.",
    category: "Sea",
  },
  {
    img: blogImg5,
    date: "December 15, 2024",
    title: "Top 10 Dream Destinations for 2025",
    subtitle: "Plan your next vacation with our curated travel guide.",
    category: "Destinations",
  },
  {
    img: blogImg6,
    date: "December 18, 2024",
    title: "Holidays Are Better in These Magical Places",
    subtitle:
      "Enjoy peaceful escapes and breathtaking views during your holidays.",
    category: "Holidays",
  },
];

export const packageImages = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  "/image2.png",
  "/image3.png",
];

export const testimonials = [
  {
    quote:
      "Our family trip to the Maldives was magical! From the booking to the resort, everything was perfectly organized. The team even surprised us with a sunset dinner. Thank you for making this unforgettable!",
    rating: 5,
    name: "Sarah Karim",
    role: "Manager at Banoi LifeStyle",
    image: "/testimonial1.png",
  },
  {
    quote:
      "Booking through this travel site was the best decision we made! Our entire trip—from flights to local experiences—was seamless and thoughtfully planned. The accommodations were top-notch, and every destination felt like a dream. Truly an unforgettable journey!",
    rating: 5,
    name: "Abdul Ahad Linkon",
    role: "Travel Blogger",
    image: "/testimonial2.jpg",
  },
];

export const VGM = {
  vision: {
    topImg: visionBanner,
    cardIcon: visionIcon,
    carditle: "Our Vision",
    cardDesc: ` The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service. The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service. The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service. The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service`,
  },
  mission: {
    topImg: missionBanner,
    cardIcon: missionIcon,
    carditle: "Our Mission",
    cardDesc: ` The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service. The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service. The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service. The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service`,
  },
  goal: {
    topImg: aimBanner,
    cardIcon: aimArrow,
    carditle: "Our Goal",
    cardDesc: ` The statement implies a willingness to help someone escape their daily routine by taking care of
                        their travel plans. It suggests a travel agency or similar service. The statement implies a
                        willingness to help someone escape their daily routine by taking care of their travel plans. It
                        suggests a travel agency or similar service. The statement implies a willingness to help someone
                        escape their daily routine by taking care of their travel plans. It suggests a travel agency or
                        similar service. The statement implies a willingness to help someone escape their daily routine
                        by taking care of their travel plans. It suggests a travel agency or similar service`,
  },
};
export default destinations;
