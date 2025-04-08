import Skill from "../skillCard";
import Certificate from "../Certificate";
import { motion } from "framer-motion";
import "./index.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation Variants
const slideFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const flipUp = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: {
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const images = [
  { id: 1, imageUrl: "../../../tech/html.png", name: "HTML" },
  { id: 2, imageUrl: "../../../tech/css.png", name: "CSS" },
  { id: 3, imageUrl: "../../../tech/nodejs.png", name: "Node Js" },
  { id: 4, imageUrl: "../../../tech/expressjs.png", name: "Express JS" },
  { id: 5, imageUrl: "../../../tech/reactjs.png", name: "React Js" },
  { id: 6, imageUrl: "../../../tech/mongodb.png", name: "MongoDB" },
  { id: 7, imageUrl: "../../../tech/mongoose.png", name: "Mongoose" },
  { id: 8, imageUrl: "../../../tech/material-ui.png", name: "Material UI" },
  { id: 9, imageUrl: "../../../tech/linuxpic.jpg", name: "LINUX" },
  { id: 10, imageUrl: "../../../tech/javascript.png", name: "Javascript" },
  { id: 11, imageUrl: "../../../tech/bootstrap.png", name: "Bootstrap" },
  { id: 12, imageUrl: "../../../tech/sql.png", name: "SQL" },
  { id: 13, imageUrl: "../../../tech/git.png", name: "Git" },
  { id: 14, imageUrl: "../../../tech/github.png", name: "Github" },
  { id: 15, imageUrl: "../../../tech/python1.png", name: "Python" },
];

const learningSkills = [
  { id: 1, imageUrl: "../../../tech/Next_js.avif", name: "Next.Js" },
  {
    id: 2,
    imageUrl: "../../../tech/dsa.jpeg",
    name: "DSA",
  },
  { id: 3, imageUrl: "../../../tech/java.avif", name: "Java" },
  { id: 4, imageUrl: "../../../tech/typescript.png", name: "Typescript" },
];

const certificates = [
  { id: 1, imageUrl: "../../../tech/Html,css,bs.jpg" },
  { id: 2, imageUrl: "../../../tech/responsive.jpg" },
  { id: 3, imageUrl: "../../../tech/Py.jpg" },
  { id: 4, imageUrl: "../../../tech/SQL certificate.jpg" },
  { id: 5, imageUrl: "../../../tech/Js.jpg" },
  { id: 6, imageUrl: "../../../tech/essentials.jpg" },
  { id: 7, imageUrl: "../../../tech/Git.jpg" },
  { id: 8, imageUrl: "../../../tech/flexbox.jpg" },
  { id: 9, imageUrl: "../../../tech/Node.jpg" },
  { id: 10, imageUrl: "../../../tech/React.jpg" },
];

const Skills = () => (
  <div className="skill-list">
    <motion.h1
      className="h1 skill-header"
      variants={slideFromLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Skills
    </motion.h1>

    <motion.ul
      className="certificate-header"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      {images.map((eachItem) => (
        <Skill eachItem={eachItem} key={eachItem.id} />
      ))}
    </motion.ul>

    <motion.h2
      className="h1 skill-header"
      variants={flipUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Learning
    </motion.h2>

    <motion.ul
      className="certificate-header"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      {learningSkills.map((eachItem) => (
        <Skill eachItem={eachItem} key={eachItem.id} />
      ))}
    </motion.ul>

    <motion.h2
      className="h1 skill-header"
      variants={zoomIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Certifications
    </motion.h2>

    <motion.ul
      className="certificate-header"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {certificates.map((eachItem) => (
        <Certificate
          eachItem={eachItem}
          key={eachItem.id}
          animationVariant={fadeInUp}
        />
      ))}
    </motion.ul>
  </div>
);

export default Skills;
