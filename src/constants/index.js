import project1 from "../assets/projects/farmcart.jpg";
import project2 from "../assets/projects/threads.jpg";
import project3 from "../assets/projects/cybertown.jpeg";
import project4 from "../assets/projects/project-4.jpg";
/* import { SiMongodb,SiReact, SiSqlite, SiSupabase,SiTailwindcss,SiExpo,SiTypescript,SiNodeDotJs,SiMysql,SiPhp,
  SiVueDotJs,SiHtml5,SiCss3,SiJavascript,SiPython,SiExpress,SiGithub,SiVercel,SiDocker,SiSupabase} from "react-icons/si";
 */
export const HERO_CONTENT = `I'm a third-year Software Engineering student at SLIIT and a Full Stack Developer with experience in web and mobile app development.`;

export const ABOUT_TEXT = `I’m a Software Engineering student passionate about mobile and web development. I specialize in building user-friendly applications with React Native, React, and modern web technologies. With experience in both frontend and backend development, I’ve worked on mobile apps, websites, and full-stack platforms like an Instagram clone and FarmCart (an e-commerce platform). My expertise includes JavaScript, React Native, Expo, Supabase, Node.js, and MongoDB. Always eager to learn, I focus on improving application performance and staying updated with industry trends. Currently, I’m seeking opportunities to apply my skills in a dynamic, collaborative environment.`;
export const EXPERIENCE_TEXT = `I have experience developing mobile apps, websites, and full-stack platforms, including an Instagram clone and FarmCart. I’ve worked with React Native, React, Node.js, and MongoDB, building scalable and user-friendly applications. I also led two university projects, managing teams of 8 and 4 members, successfully delivering a MERN-stack website in 10 weeks. Additionally, I gained hands-on experience during a three-month startup internship. My projects emphasize performance, usability, and problem-solving, and I continuously explore new technologies to enhance my development skills.`;
export const RECENT_TEXT = `Recently, I’ve been learning Flutter, building test apps to explore UI design and best practices. Alongside this, I’m improving my JavaScript skills to deepen my understanding of modern web development. I stay updated with industry trends and actively seek opportunities to apply my skills in a professional environment.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Team lead",
    company: "",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
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
    title: "E-Commerce Website (FarmCart)",
    image: project1,
    description:
      "FarmCart is an e-commerce platform designed to streamline the buying and selling of farm products. Built with the MERN stack (MongoDB, Express.js, React, and Node.js), it offers a user-friendly interface for customers to browse products, add items to their cart, and complete purchases securely. The platform includes authentication, order management, and a responsive design for seamless access across devices. With a scalable backend and a modern frontend, FarmCart ensures efficient performance and a smooth shopping experience.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Instagram Clone",
    image: project2,
    description:
      "A social media app inspired by Instagram, built using React Native (Expo) and Supabase. It includes user authentication, post creation with image uploads, likes, comments, and user profiles. Supabase handles the backend, providing authentication, database, and storage services. The app features a smooth and responsive UI, ensuring a seamless user experience. This project helped me strengthen my skills in full-stack mobile development and working with backend-as-a-service (BaaS) solutions.",
    technologies: ["React Native", "Expo", "Supabase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "TailwindCSS"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
