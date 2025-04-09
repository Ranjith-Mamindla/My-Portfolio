import { motion } from "framer-motion";
import Project from "../project";
import "./index.css";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const certificates = [
  {
    id: 1,
    imageUrl: "/tech/ecom.png",
    name: "Ecommerce-Application",
    description:
      "An E-commerce application enables users to browse, search, and purchase products online...",
    link: "https://ranjithmecom.ccbp.tech/login",
  },
  {
    id: 2,
    imageUrl: "/tech/jobby-app.png",
    name: "Jobby-App",
    description:
      "The Jobby App is a job search platform that allows users to browse and apply for jobs...",
  },
  {
    id: 3,
    imageUrl: "/tech/swiggy.png",
    name: "Tasty-kitchens-Swiggy/Zomato-Clone",
    description:
      "A Tasty Kitchens is a food delivery application that connects users with nearby restaurants...",
    link: "https://ranjithswiggy.ccbp.tech/",
  },
  {
    id: 4,
    imageUrl: "/tech/nxt-watch.png",
    name: "NXT-Watch-Youtube-Clone",
    description:
      "Nxt Watch is a YouTube clone application that allows users to watch, search, and explore video content...",
    link: "https://ranjitmnxtwatch.ccbp.tech/login",
  },
  {
    id: 5,
    imageUrl: "/tech/wikki.png",
    name: "Wikipedia-Search-Application",
    description:
      "A Wikipedia Search App allows users to search and browse articles from Wikipedia in a simplified interface...",
    link: "https://github.com/Ranjith-Mamindla/WikipediaSearchApplication",
  },
  {
    id: 6,
    imageUrl: "/tech/todos.png",
    name: "Todos-Appication",
    description:
      "A ToDos application is a task management tool that allows users to create, view, edit, and delete tasks...",
    link: "https://github.com/Ranjith-Mamindla/TodoList-Application",
  },
];

const Projects = () => (
  <motion.div
    className="project"
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <h1 className="project-header">Projects</h1>
    <ul className="project-list">
      {certificates.map((eachItem) => (
        <Project eachItem={eachItem} key={eachItem.id} />
      ))}
    </ul>
  </motion.div>
);

export default Projects;
