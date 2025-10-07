import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbApi, TbDeviceMobile } from "react-icons/tb";
import type { Link, Skill, Projects } from "./types/data";

import PixelFlow from "./assets/projects-img/Pixel-flow.png";
import CartApp from "./assets/projects-img/Cart-App.png";
import DynamicNavbar from "./assets/projects-img/Dynamic-Navbar.png";
import SidebarModal from "./assets/projects-img/Sidebar-Modal.png";
import BackRoadTours from "./assets/projects-img/BackRoadTours.png";
import ReactNavbarComponent from "./assets/projects-img/React-Navbar-Component.png";
import GroceryBud from "./assets/projects-img/GroceryBud .png";
import PaletteGenerator from "./assets/projects-img/PaletteGenerator.png";
import TextGenerator from "./assets/projects-img/TextGenerator.png";
import JobTabs from "./assets/projects-img/Job-Tabs-App.png";
import MenuFilter from "./assets/projects-img/MenuFilter.png";
import QuestionAccordion from "./assets/projects-img/Question-Accordion.png";
import Reviews from "./assets/projects-img/Reviews.png";
import ToursProject from "./assets/projects-img/ToursProject .png";

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
    img: BackRoadTours,
    url: "https://backroads-app-landingpage-gp.netlify.app/#tours",
    github: "https://github.com/pro804/Backroads-App",
    title: "BackRoad Tours",
    text: `A modern, responsive landing page for a tour company, rebuilt in React.
    This project demonstrates converting a static HTML/CSS website into a dynamic 
    React application with reusable components and centralized data.`,
  },
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
    img: MenuFilter,
    url: "https://menu-project-gpdev.netlify.app/",
    github: "https://github.com/pro804/Menu-Filter-UI",
    title: "Menu Filter UI",
    text: `A React practice project featuring a dynamic menu with category filtering functionality. 
    Built to practice state management and component composition in React.`,
  },

  {
    id: nanoid(),
    img: ToursProject,
    url: "https://tours-project-gpdev.netlify.app/",
    github: "https://github.com/pro804/Tours",
    title: "Tours Project",
    text: `A learning project built with React to master fundamental concepts: API integration,state, effects, conditional rendering, and props. 
    Demonstrates the power of React for building interactive and dynamic web applications.`,
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
    Features smooth 3D animations, mobile-first responsive design, and inspired by Strapi CMS admin panel.`,
  },
  {
    id: nanoid(),
    img: SidebarModal,
    url: "https://sidebar-modal-gpdev.netlify.app/",
    github: "https://github.com/pro804/React-Sidebar-Modal",
    title: "Sidebar&Modal",
    text: `A modern, responsive React application showcasing interactive sidebar and modal components with smooth animations. 
    Features a testimonial slider within the modal for enhanced user engagement.`,
  },
  {
    id: nanoid(),
    img: ReactNavbarComponent,
    url: "https://navbar-component-gpdev.netlify.app/",
    github: "https://github.com/pro804/React-Navbar-Component",
    title: "Navbar Component",
    text: `A modern, responsive navigation bar component built with React. 
    Features smooth animations, dynamic height calculation, and mobile-first responsive design. 
    Perfect for practicing React hooks, CSS transitions, and responsive UI development.`,
  },
  {
    id: nanoid(),
    img: GroceryBud,
    url: "https://grocery-bud-gpdev.netlify.app/",
    github: "https://github.com/pro804/Grocery-Bud",
    title: "Grocery Bud ",
    text: `A sleek and intuitive grocery list manager built with React. 
    Perfect for keeping track of your shopping items with persistent storage and a clean, 
    responsive interface.`,
  },
  {
    id: nanoid(),
    img: PaletteGenerator,
    url: "https://color-palette-generator-gpdev.netlify.app/",
    github: "https://github.com/pro804/Color-Palette-Generator",
    title: "Palette Generator ",
    text: `A responsive React application for generating beautiful color palettes from any hex color input. 
    Perfect for designers and developers who need quick access to color shades and tints for their projects. `,
  },
  {
    id: nanoid(),
    img: TextGenerator,
    url: "https://lorem-ipsum-text-generator-gpdev.netlify.app/",
    github: "https://github.com/pro804/Lorem-Ipsum-Text-Generator",
    title: "Text Generator ",
    text: `A responsive React application for generating customizable Lorem Ipsum placeholder text. 
    Perfect for developers and designers who need quick dummy text for prototyping and testing applications.`,
  },
  {
    id: nanoid(),
    img: JobTabs,
    url: "https://job-tabs-app-gpdev.netlify.app/",
    github: "https://github.com/pro804/Job-Tabs-App",
    title: "Job Tabs ",
    text: `A dynamic React app that displays job experience cards via interactive tabs. 
    Features API data fetching, responsive design, and state management.`,
  },
  {
    id: nanoid(),
    img: QuestionAccordion,
    url: "https://question-accordion-ui-gpdev.netlify.app/",
    github: "https://github.com/pro804/Question-Accordion-UI",
    title: "Question Accordion UI ",
    text: `A React practice project showcasing an interactive FAQ accordion. 
    Demonstrates state management, component communication, 
    and conditional rendering by displaying only one answer at a time.`,
  },
  {
    id: nanoid(),
    img: Reviews,
    url: "https://reviews-project-gpdev.netlify.app/",
    github: "https://github.com/pro804/Reviews",
    title: "Reviews Project ",
    text: `A React practice project focused on creating an interactive review slider. 
    Displays customer testimonials with navigation controls for a seamless user experience.`,
  },
];
