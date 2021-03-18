// Image Imports
import howdy from "../assets/howdy/howdy_1.png";
import doodle from "../assets/doodle/doodle_1.png";
import flourish from "../assets/flourish/flourish_1.PNG";
import sorting from "../assets/other/sorting-visualizer.png";

// Project List Data
export const projectData = [
  {
    link: "https://jameseaster.github.io/sorting-visualizer/",
    img: sorting,
    style: "img",
    title: "Sorting-Visualizer",
    subtitle: "A web application visualize sorting algorithms",
    features: `Features: Depicts six different sorting algorithms, and utilizes
asynchronous code to visual their differences in efficiency and
execution`,
    techStack: "Tech Stack: Vue.js, Bootstrap Vue, Vuetify, ES8+",
    github: "https://github.com/jameseaster/sorting-visualizer",
  },
  {
    link: "https://youtu.be/K9k9t54Spxc",
    img: flourish,
    style: "img flourish",
    title: "Flourish",
    subtitle: "A mobile application for the plant-owning community.",
    features: `Features: Plant Identification, Augmented Reality, Direct Messaging,
    Posting, Following, & Sharing`,
    techStack: `Tech Stack: React Native, Redux, Expo, ngrok, Google Login, PlantId,
    FeatherJS, NodeJS, MariaDB, Three.js`,
    github: "https://github.com/Team-GreenDev/flourish",
  },
  {
    link: "https://youtu.be/RrTmyRj_7aw",
    img: doodle,
    style: "img",
    title: "Doodle Society",
    subtitle: "A web application to share doodles.",
    features: `Features: Geolocation, Live Doodling, Instant Messaging, Sharing via
    Text Message, & Rankings`,
    techStack: `Tech Stack: React, Twilio, Bootstrap, Pusher, Cloudinary, Fastify,
    NodeJS, Postgres, Google Maps`,
    github: "https://github.com/team-tauros/doodle-society-1",
  },
  {
    link: "https://youtu.be/wAt3b_yNUwU",
    img: howdy,
    style: "img",
    title: "Howdy",
    subtitle: "A web app for throwing virtual parties with your neighbors.",
    features: `Features: Geolocation, Google Authentication, Live Messaging, Game
    ("Who Am I?"), & Creating a Party`,
    techStack: `Tech Stack: React, Socket.io, React-Router, Google Auth, Axios,
    Express, NodeJS, MySql`,
    github: "https://github.com/team-tauros/Howdy",
  },
];
