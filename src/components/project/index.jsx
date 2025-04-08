import { motion } from "framer-motion";
import "./index.css";

const Project = ({ eachItem }) => {
  return (
    <motion.li
      className="project-card"
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.img
        src={eachItem.imageUrl}
        alt={eachItem.name}
        className="project-img"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="project-desc">
        <motion.h2
          className="project-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eachItem.name}
        </motion.h2>
        <motion.p
          className="project-para"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {eachItem.description}
        </motion.p>
        <motion.a
          href={eachItem.link || "#"}
          className="project-link"
          whileHover={{ scale: 1.05, rotate: -1 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </motion.a>
      </div>
    </motion.li>
  );
};

export default Project;
