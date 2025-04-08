import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

const About = () => (
  <div className="about">
    <motion.div
      className="desc"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="h1 about-header-1">About Me</h1>
      <p className="about-para">
        Hi, I'm Ranjith Mamindla, a passionate MERN stack developer with a
        strong foundation in building dynamic, scalable web applications...
      </p>
      <h3 className="about-header h2">What I Bring to the Table</h3>
      <ul className="about-para">
        {[
          "Strong proficiency in JavaScript (ES6+), HTML5, CSS3, and modern frontend libraries like React.",
          "Experience with Node.js and Express for developing RESTful APIs and handling server-side logic.",
          "Expertise in MongoDB for efficient database management and data modeling.",
          "A keen eye for detail, problem-solving skills, and a commitment to writing maintainable code.",
        ].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>

    <motion.img
      src="/tech/about.png"
      alt="about-image"
      className="aboutImage"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    />
  </div>
);

export default About;
