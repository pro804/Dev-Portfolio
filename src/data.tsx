import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import type { Link, Project, Skill } from "./types/data";

import PixelFlow from "./src/assets/projects-img/PixelFlow.png";
import CartApp from "./src/assets/projects-img/Cart-App.png";
import DynamicNavbar from "./src/assets/projects-img/Dynamic-Navbar.png";

export const links: Link[] = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills: Skill[] = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects: Project[] = [
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
