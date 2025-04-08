import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

const Certificate = ({ eachItem }) => {
  return (
    <motion.li
      className="certificates"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <img
        src={eachItem.imageUrl}
        className="card-image"
        alt={eachItem.name}
      />
    </motion.li>
  );
};

export default Certificate;
