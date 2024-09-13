import chatApp from "../assets/projects/chat.jpg";
import hotelApp from "../assets/projects/hotel.jpg";
import netFlixApp from "../assets/projects/netflix.jpg";
import recipesApp from "../assets/projects/recipes.jpg";

export const HERO_CONTENT = `I am self-taught passionate full stack  developer with a strong sense of responsibility
and organization, seeking my first professional opportunity in the field.
As a Junior Web Developer, I am passionate about modern web
development and have developed skills in creating web applications
using frameworks and library of Javascript and CSS. I'm excited to bring my skills and enthusiasm to a great team.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Real-Time Chat Application",
    image: chatApp,
    description:
      "A responsive chat app with real-time messaging, using Socket.io for seamless communication.",
    technologies: ["Tailwind", "Socket.io", "React", "Express", "MongoDB"],
    demo: "https://chat-app-c0yf.onrender.com/log-in",
  },
  {
    title: "Hotel Booking System",
    image: hotelApp,
    description:
      "A hotel reservation app with features like room booking, availability tracking, and user authentication.",
    technologies: ["Tailwind", "Typescript", "React", "Express", "MongoDB"],
    demo: "https://booking-app-glea.onrender.com/",
  },
  {
    title: "Streaming Service Clone",
    image: netFlixApp,
    description:
      "A Netflix-inspired streaming app showcasing movies and series with user authentication and media streaming.",
    technologies: ["Tailwind", "React", "Express", "MongoDB"],
    demo: "https://movie-app-kozt.onrender.com/",
  },
  {
    title: "Recipe Sharing Platform",
    image: recipesApp,
    description:
      "A platform for food lovers to create, share, and explore recipes with user profiles and save features.",
    technologies: ["Tailwind", "React", "Express", "MongoDB"],
    demo: "https://foodie-front-r4x6.onrender.com/sign-in",
  },
];

export const CONTACT = {
  address: "7E JLN Baiduri Off JLN San Peng, 55200 ,Kuala Lumpur",
  phoneNo: "+60 18237 3467 ",
  email: "luainawl@gmail.com",
};
