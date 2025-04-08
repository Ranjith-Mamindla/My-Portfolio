import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

const Skill = ({ eachItem }) => {
  return (
    <motion.li
      className="card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <img
        src={eachItem.imageUrl}
        className="card-img-top"
        alt={eachItem.name}
      />
      <div className="card-body">
        <p className="card-text">{eachItem.name}</p>
      </div>
    </motion.li>
  );
};

export default Skill;
