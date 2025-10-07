import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbApi, TbDeviceMobile } from "react-icons/tb";
import type { Link, Skill, Projects } from "./types/data";

import PixelFlow from "./assets/projects-img/Pixel-flow.png";
import CartApp from "./assets/projects-img/Cart-App.png";
import DynamicNavbar from "./assets/projects-img/Dynamic-Navbar.png";

export const links: Link[] = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills: Skill[] = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in writing semantic HTML and modern CSS to build responsive, accessible, and visually appealing layouts for all device sizes.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in vanilla JavaScript to create dynamic and interactive user experiences, with a solid understanding of ES6+ features.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Building component-based user interfaces. Experienced with core concepts like hooks, state, and props to create maintainable front-end applications.",
  },
  {
    id: nanoid(),
    title: "React Native",
    icon: <TbDeviceMobile className="h-16 w-16 text-emerald-500" />, // You'll need to import FaMobile
    text: "Completed Meta's React Native Specialization, with foundational knowledge in building cross-platform mobile applications using React Native and Expo.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Using TypeScript in projects to write more robust and self-documenting code, reducing errors and improving the development experience.",
  },
  {
    id: nanoid(),
    title: "State Management",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />, // Or a custom icon
    text: "Experience managing complex state logic using React's useReducer hook and sharing state globally with the Context API.",
  },
  {
    id: nanoid(),
    title: "API Integration",
    icon: <TbApi className="h-16 w-16 text-emerald-500" />,
    text: "Comfortable fetching and handling data from both REST and third-party APIs to display dynamic content in applications.",
  },
  {
    id: nanoid(),
    title: "Tooling & Git",
    icon: <FaGitAlt className="h-16 w-16 text-emerald-500" />,
    text: "Proficient with modern build tools like Vite and using Git for version control to track projects and collaborate effectively.",
  },
];

export const projects: Projects[] = [
  {
    id: nanoid(),
    img: PixelFlow,
    url: "https://pixel-flow-gpdev.netlify.app/",
    github: "https://github.com/pro804/Pixel-Flow",
    title: "PixelFlow - Image Gallery",
    text: `PixelFlow is a responsive image search application built with React and TypeScript,powered by the Unsplash API. 
    Features a beautiful masonry layout, dark/light theme toggle, and seamless search experience.`,
  },
  {
    id: nanoid(),
    img: CartApp,
    url: "https://cart-app-project-gpdev.netlify.app/",
    github: "https://github.com/pro804/React-Cart-App",
    title: "Cart-App",
    text: `A React cart application demonstrating advanced state management with useReducer and Map data structure. 
    Focus on complex state transitions and performance optimization.`,
  },
  {
    id: nanoid(),
    img: DynamicNavbar,
    url: "https://dynamic-navbar-gpdev.netlify.app/",
    github: "https://github.com/pro804/React-Dynamic-Navbar",
    title: "Dynamic-Navbar",
    text: `A modern, responsive navigation bar with dynamic submenus, built with React and Context API. 
    Features smooth 3D animations, mobile-first responsive design, and inspired by Strapi CMS admin panel. `,
  },
];
